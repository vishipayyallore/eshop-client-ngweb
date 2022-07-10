const express = require('express')
const path = require('path')
const { Provider } = require('oidc-provider')
const cors = require('cors')

const configuration = require('./utilities/authority/oidc-configuration').configuration

const app = express()

//Middlewares
app.use(cors({
  origin: ['http://localhost:4200', 'http://localhost:8080', 'https://oidcdebugger.com/debug']
}))
app.use(express.static(__dirname + '/public'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const oidc = new Provider('http://localhost:3000', configuration)
app.use("/oidc", oidc.callback())

app.listen(3000, function () {
  console.log('OIDC is listening on port 3000!')
})
