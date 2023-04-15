const express = require('express');

const apiRoutes = require('./routes/notes.js');
// const indexRouter = require('./index');
const feedbackRouter = require('./feedback');
const diagnosticsRouter = require('./diagnostics');

const app = express();

app.use('/notes', notesRouter);
// app.use('/index', indexRouter);
app.use('/feedback', feedbackRouter);
app.use('/diagnostics', diagnosticsRouter);
app.use('/api', apiRoutes);

module.exports = app;
 
