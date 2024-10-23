const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.json({
        message: `isso aí`,
        x: 0,
        y: 0,
        direction: 'N',
    });
});

app.get('/api/robot', (req, res) => {
    res.send('robo foi chamado rs');
});

app.listen(port, () => {
    console.log(`Server tocou a companhia da porta ${port}`);
});