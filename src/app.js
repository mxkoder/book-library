const express = require('express');
const readersRouter = require('./routes/readers');
const booksRouter = require('./routes/books')

const app = express();

app.use(express.json());

app.use('/readers', readersRouter);
app.use('/books', booksRouter);

module.exports = app;

