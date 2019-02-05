const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.sendFile(`${__dirname}/index.html`);
})


app.listen('3000', function () {
    console.log('listening to port 3000, yeah!!!');
})