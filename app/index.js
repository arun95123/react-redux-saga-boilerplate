const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.dev.js');
const exphbs =require('express-handlebars');
const router = require('./router');
const bodyParser=require('body-parser');
const app = express();

const isDeveloping = process.env.NODE_ENV !== 'production';

app.use(express.static(path.join(__dirname, '..', '/dist')));

app.engine('.html', exphbs({
  defaultLayout: 'layout',
  extname: '.html'
}));
app.set('view engine', '.html');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
// app.use('/',router);

if(isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
   publicPath: config.output.publicPath,
   contentBase: 'src',
   stats: {
     colors: true,
     hash: false,
     timings: true,
     chunks: false,
     chunkModules: false,
     modules: false
   }
 });

 app.use(middleware);
 app.use(webpackHotMiddleware(compiler));

 app.get('/*', function response(req, res) {
   res.render('home');
 });
}



module.exports = app;
