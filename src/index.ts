//dotent config
import dotenv from 'dotenv';
dotenv.config();

//Node server with express and typescript
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

//set port express
app.set('port', process.env['SERVER_PORT']);

import loginRoute from '@/infraestructure/routes/login.route';

app.use(bodyParser.json());

app.use(loginRoute);

app.listen(app.get('port'), () => {
    console.log(`App Listen on port: ${app.get('port')}`)
});