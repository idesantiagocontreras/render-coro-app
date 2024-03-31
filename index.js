import express from 'express';

const app = express();

const port = 3000;
app.listen(port);

app.get('/', (req, res) => {
    res.send("Hello word");
});

console.log(`Server on port ${port}`);