// src/app.js
const express = require('express');
const projectsRoutes = require('./routes/projectsRoutes');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use('/projects', projectsRoutes);

module.exports = app;