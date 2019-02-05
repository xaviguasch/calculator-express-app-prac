const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('this is the calculator app')
})


app.listen('3000', function () {
    console.log('listening to port 3000, yeah!!!');
})