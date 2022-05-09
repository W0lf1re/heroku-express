const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/users', (req, res) => {
    res.send([
        { firstName: "yvann", lastName: "Nadal" },
        { firstName: "ruben", lastName: "Suarez" }
    ])
})

app.listen(port, () => {
    console.log(`Server is running on port 8000`);
})