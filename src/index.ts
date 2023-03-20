//Node server with express and typescript
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

import loginRoute from '@/infraestructure/routes/login.route';

app.use(bodyParser.json());

app.use('/login', loginRoute);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});