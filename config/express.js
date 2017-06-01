//define modules dependencies for this module
var config = require('./config'),
  express = require('express'),
  morgan = require('morgan'), //logger module
  compress = require('compression'),  //compresion module
  bodyParser = require("body-parser"),  //provide several midlewares to handle request data
  methodOverride = require("method-override"),  //provide DELETE and PUT http vers legacy support
  session = require('express-session');

module.exports = function() {
  var app = express();

  //if environment is development, then use morgan logger module
  if (process.env.NOVE_ENV === 'development') {
    app.use(morgan('dev'));
  } else if(process.env.NODE_ENV === 'production'){
    //if environment is production, use compression module
    app.use(compress());
  }

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(methodOverride());

  app.use(session({
    saveUninitilized: true,
    resave: true,
    secret: config.sessionSecret
  }));

  //configure views folder and template engine
  app.set('views', './app/views');
  app.set('view engine', 'ejs');
  require('../app/routes/index.server.routes.js')(app);

  app.use(express.static('./public'));

  return app;
};
