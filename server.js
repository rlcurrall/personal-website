/* NODE MODULES */
const path = require('path');
const http = require('http');
const helmet = require('helmet');
const express = require('express');

/* GLOBAL VARIABLES */
const publicPath = path.join(__dirname, '/dist');
const port = process.env.PORT || 3000;

/* SERVER CONFIG */
let app = express()
    .disable('x-powered-by')
    .use(helmet())
    .use(express.static(publicPath))
    .get('*', (req, res) => res.sendFile(`${publicPath}/index.html`));

/* SET PORT LISTENER */
http.createServer(app).listen(port, () => console.log(`Server is up on port ${port}`));
