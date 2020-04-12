const express = require('express');
const app = express();

app.use(express.json());

app.set("port", 5000);

module.exports = app;