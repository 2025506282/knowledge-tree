var express = require('express');
var path = require('path');
var xlsx = require('node-xlsx').default;
var app = express();
var fs = require('fs');
var usersDB = require('./db/users');
var sportsDB = require('./db/sports');
var recipesDB = require('./db/recipes');
var drugsDB = require('./db/drugs');
var questionsDB = require('./db/questions');
var xlsxController = require('./controllers/xlsx');
//允许访问,解决跨域

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers',

        'Content-Type,Content-Length,Authorization,\'Origin\',Accept,X-Requested-With');

    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.header('Access-Control-Allow-Credentials', true);
    // res.setHeader('ETag', new Date().getTime());
    // res.header('ETag', new Date().getTime());
    // res.setHeader("Cache-Control", "max-age=300");
    res.setHeader('Expires', new Date(Date.now() + 1000).toGMTString());
    // res.header('Content-Type', 'application/json;charset=utf-8');

    next();

})
app.use('/static', express.static(path.join(__dirname, 'static')))
app.get('/', function (req, res) {
    res.setHeader('Content-Type','text/html;charset=utf-8');
    fs.createReadStream(path.join(__dirname, 'static/example.html')).pipe(res);
})
//接口
app.get('/users', function (req, res) {
    // res.setHeader("Cache-Control", "max-age=300");
    // res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
    res.send(usersDB)
});
app.get('/sports', function (req, res) {
    res.send(sportsDB.sports)
})
app.get('/supportSports', function (req, res) {
    res.send(sportsDB.supportSports)
})
app.get('/recipes', function (req, res) {
    res.send(recipesDB)
})
app.get('/questions', function (req, res) {
    res.send(questionsDB.questions)
})
app.get('/drugs', function (req, res) {
    res.send(drugsDB.drugs)
})
app.get('/addedDrugs', function (req, res) {
    res.send(drugsDB.addedDrugs)
})
app.get('/xlsx', xlsxController.transXlsx);
app.get('/xlsx/checkbox', xlsxController.transCheckBox);
var server = app.listen(3000, function () {

    var host = server.address().address

    var port = server.address().port

    console.log(`应用实例，访问地址为 http://localhost:${port}`)

})