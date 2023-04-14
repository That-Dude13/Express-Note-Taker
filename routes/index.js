const express = require('express');

const indexRouter = require('./notes');
const indexRouter = require('./index');
const feedbackRouter = require('./feedback');
const diagnosticsRouter = require('./diagnostics');

const app = express();

app.use('/notes', notesRouter);
app.use('/index', indexRouter);
app.use('/feedback', feedbackRouter);
app.use('/diagnostics', diagnosticsRouter);

module.exports = app;

test 
