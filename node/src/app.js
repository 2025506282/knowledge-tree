var express = require('express');

var app = express();

var users = require('./db/users');
var sports = require('./db/sports');
var recipes = require('./db/recipes');
var drugs = require('./db/drugs');
//允许访问,解决跨域

app.all('*', function (req, res, next) {

    res.header('Access-Control-Allow-Origin', req.headers.origin || '*');

    res.header('Access-Control-Allow-Headers',

        'Content-Type,Content-Length,Authorization,\'Origin\',Accept,X-Requested-With');

    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.header('Access-Control-Allow-Credentials', true);

    res.header('X-Powered-By', ' 3.2.1');

    res.header('Content-Type', 'application/json;charset=utf-8');

    next();

})

//接口

app.get('/users', function (req, res) {
    res.send(users)
})
app.get('/sports', function (req, res) {
    res.send(sports.sports)
})
app.get('/supportSports', function (req, res) {
    res.send(sports.supportSports)
})
app.get('/recipes', function (req, res) {
    res.send(recipes)
})
app.get('/drugs', function (req, res) {
    res.send(drugs.drugs)
})
app.get('/addedDrugs', function (req, res) {
    res.send(drugs.addedDrugs)
})
var server = app.listen(3000, function () {

    var host = server.address().address

    var port = server.address().port

    console.log(`应用实例，访问地址为 http://localhost:${port}`)

})