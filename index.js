const express = require('express');
const bodyParser = require('body-parser');

const postsRoutes = require('./routes/postsRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/posts', postsRoutes);

app.listen(5000, console.log('Connected'));
