// src/app.js
const express = require('express');
const projectsRoutes = require('./routes/projectsRoutes');
const app = express();

app.use(express.json());
app.use('/projects', projectsRoutes);

module.exports = app;