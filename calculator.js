const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', function (req, res) {
    res.sendFile(`${__dirname}/index.html`);
})

app.post('/', function (req, res) {
    res.send('thanks for posting that')
})


app.listen('3000', function () {
    console.log('listening to port 3000, yeah!!!');
})