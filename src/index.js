//if (process.env.NODE_ENV !== 'production') {
 // require('dotenv').config();
//} 


const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
//const methodOverride = require('method-override');
//const passport = require('passport');
//const mongoose = require('mongoose');

// Initializations
const app = express();
//require('./database');



//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    //helpers: require('./helpers'),
    extname: '.hbs'
  }));
  app.set('view engine', '.hbs');



// middlewares
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.urlencoded({extended: false}));






// routes
app.use(require('./routes'));
//app.use(require('./routes/fruta'));
//app.use(require('./routes/crema'));
//app.use(require('./routes/exclusivo'));


// server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});