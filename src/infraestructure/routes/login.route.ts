// Express routes
import { Router } from 'express';

import pool from '../database/pg-pool';

const router = Router();

router.get('/', async (_req, res) => {

    const time = await pool.query('SELECT NOW()');

    console.log(time.rows[0].now)

    res.send(`Hello World! ${time.rows[0].now}`);
});

export default router;