const express = require('express');

const app = express();

const PORT = 3000;

app.listen(PORT, (err) => {
    if(!err){
    console.log(`Server is running & listening on prort ${PORT}`);
    } else {
        console.log(`Something went wrong`)
    }
});

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
});