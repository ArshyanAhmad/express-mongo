const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const Router = require('./Router/routes')

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

app.use(Router)

app.listen(8080)