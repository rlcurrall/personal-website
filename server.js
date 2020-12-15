import path from 'path';
import http from 'http';
import helmet from 'helmet';
import express from 'express';

const publicPath = path.join(process.cwd(), '/dist');
const port = process.env.PORT || 3000;

const app = express()
    .disable('x-powered-by')
    .use(helmet())
    .use(express.static(publicPath))
    .get('*', (req, res) => res.sendFile(`${publicPath}/index.html`));

http.createServer(app).listen(port, () => console.log(`Server is up on port ${port}`));
