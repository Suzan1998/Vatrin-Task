/**
* Module dependencies.
*/
var express = require('express')
  , routes = require('./routes')
 , user = require('./routes/user')
  , path = require('path');
var session = require('express-session');
var app = express();
var bodyParser=require("body-parser");

var Knex = require('knex');
var knexConfig = require('./knexfile');
 var Model = require('objection').Model;
 var knex = Knex(knexConfig.development);
 Model.knex(knex);


 //for API's
 //var registerApi = require('./api');
 //registerApi(app);

app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
              secret: 'keyboard cat',
              resave: false,
              saveUninitialized: true,
              cookie: { maxAge: 60000 }
            }))

//routes
app.get('/', routes.index);
app.get('/register', user.register);
app.post('/register', user.register);
app.get('/login', routes.index);
app.post('/login', user.login);//call for login post
app.get('/logout', user.logout);//logout
app.get('/listUsers', user.usersList);//logout
app.listen(8080)