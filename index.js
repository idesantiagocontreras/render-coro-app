import express from 'express';
import {config} from 'dotenv';
import pg from 'pg';

config()

const app = express();
const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    //ssl: true
})

const port = 3000 || process.env.PORT;

app.get('/', (req, res) => {
    res.send("Hello word");
});

app.get('/ping', async (req, res) => {
    const result = await pool.query("SELECT NOW()");
    return res.json(result.rows[0]);
});

app.listen(port);
console.log(`Server on port ${port}`);