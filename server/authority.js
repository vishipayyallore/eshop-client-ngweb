const express = require('express');
const { Provider } = require('oidc-provider');
const path = require('path');

const app = express();

//Middlewares
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const configuration = {
  clients: [{
    client_id: "oidcCLIENT",  
    application_type: 'web',
    scope: 'openid offline_access profile email',     
    //client_secret: "Some_super_secret",      
    grant_types: ["authorization_code"],      
    redirect_uris: [ "http://localhost:8080/login/callback", "http://localhost:4200/signin-callback", "https://oidcdebugger.com/debug"], 
    response_types: ["code",],  
    //token_endpoint_auth_method: 'client_secret_basic'
    token_endpoint_auth_method: 'none'
    //other configurations if needed
  }], 
  pkce: {
    required: () => false,
  },
};

const oidc = new Provider('http://localhost:3000', configuration);

app.use("/oidc", oidc.callback());

app.listen(3000, function () {
  console.log('OIDC is listening on port 3000!');
});