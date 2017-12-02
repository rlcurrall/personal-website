/* NODE MODULES */
const path = require('path');
const http = require('http');
const express = require('express');

/* IMPORTS */


/* GLOBAL VARIABLES */
const publicPath = path.join(__dirname, '..', '/public');
const port = process.env.PORT || 3000;

/* SERVER CONFIG */
let app = express();
let server = http.createServer(app);

app.use(express.static(publicPath));

/* SET PORT LISTENER */
server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});