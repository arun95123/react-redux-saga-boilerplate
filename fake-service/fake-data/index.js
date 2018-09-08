'use strict';
const {getData} = require('../stubs/data.js')
const express = require('express');
const app = express();

app.get('/data',(req,res) => {
  res.status(200).send(getData());
});

module.exports = app;
