const express = require('express');
const dbConnect = require("./config/mongo");

const app = express();

app.use(express.json());

app.use('', require('./routes'));

const port = 3001;

app.listen(port, () => {
    console.log('http://localhost:' + port);
});

dbConnect();