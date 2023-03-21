// Express routes
import { Router } from 'express';

import pool from '../database/pg-pool';

const router = Router();

router.get('/', async (_req, res) => {
    res.send(`Hello World!`);
});

export default router;
