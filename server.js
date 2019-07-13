/* NODE MODULES */
const path = require('path')
const http = require('http')
const express = require('express')

/* GLOBAL VARIABLES */
const publicPath = path.join(__dirname, '/dist')
const port = process.env.PORT || 3000

/* SERVER CONFIG */
let app = express()
let server = http.createServer(app)

app.use(express.static(publicPath))

app.get('*', (req, res) => {
  res.sendFile(`${publicPath}/index.html`)
})

/* SET PORT LISTENER */
server.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})
