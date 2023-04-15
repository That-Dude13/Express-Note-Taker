const express = require('express');

const indexRouter = require('./notes');
const indexRouter = require('./index');

const app = express();

app.use('/notes', notesRouter);
app.use('/index', indexRouter);


module.exports = app;

 
