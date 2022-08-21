const express = require('express');
const readersRouter = require('./routes/readers');

const app = express();

app.use(express.json());

app.use('/readers', readersRouter);

module.exports = app;

// //app.use('/artist/:artistId/album', albumRouter);
// app.use('/album', albumRouter);


// module.exports = app;