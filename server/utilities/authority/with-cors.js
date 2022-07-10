const { Provider } = require('oidc-provider');

const { errors: { InvalidClientMetadata } } = Provider;

const corsProp = 'urn:custom:client:allowed-cors-origins';
const isOrigin = (value) => {
  if (typeof value !== 'string') {
    return false;
  }
  try {
    const { origin } = new URL(value);
    // Origin: <scheme> "://" <hostname> [ ":" <port> ]
    return value === origin;
  } catch (err) {
    return false;
  }
}

module.exports.configureCORS = function (configuration){
  configuration.extraClientMetadata = {
    properties: [corsProp],
    validator(ctx, key, value, metadata) {
      if (key === corsProp) {
        // set default (no CORS)
        if (value === undefined) {
          metadata[corsProp] = [];
          return;
        }
        // validate an array of Origin strings
        if (!Array.isArray(value) || !value.every(isOrigin)) {
          throw new InvalidClientMetadata(`${corsProp} must be an array of origins`);
        }
      }
    },
  }

  configuration.clientBasedCORS = function(_ctx, origin, client) {
    // ctx.oidc.route can be used to exclude endpoints from this behaviour, in that case just return
    // true to always allow CORS on them, false to deny
    // you may also allow some known internal origins if you want to
    return client[corsProp].includes(origin);
  }
}