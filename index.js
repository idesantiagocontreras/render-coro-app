import express from 'express';

const app = express();

const port = 3000 || process.env.PORT;

app.get('/', (req, res) => {
    res.send("Hello word");
});

app.listen(port);
console.log(`Server on port ${port}`);