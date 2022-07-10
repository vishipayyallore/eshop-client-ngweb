const configureCORS = require('./with-cors').configureCORS

const configuration = {
  clients: [{
    client_id: "oidcCLIENT",  
    application_type: 'web',
    scopes: ['openid', 'profile', 'email'],     
    //client_secret: "Some_super_secret",      
    grant_types: ["authorization_code"],      
    redirect_uris: [ "http://localhost:8080/login/callback", "http://localhost:4200/signin-callback", "https://oidcdebugger.com/debug"], 
    post_logout_redirect_uris: ['http://localhost:4200'],
    response_types: ["code",],  
    //token_endpoint_auth_method: 'client_secret_basic'
    token_endpoint_auth_method: 'none'
    //other configurations if needed
  }], 
  pkce: {
    required: () => true,
  },
}
configureCORS(configuration)

module.exports.configuration =  configuration
