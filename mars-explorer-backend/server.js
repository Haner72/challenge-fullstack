const express = require('express');
const app = express();
const port = 4200;

app.get('/', (req, res) => {
    res.send('O beck ta on');
});

app.listen(port, () => {
    console.log(`Server tocou a companhia da porta ${port}`);
});