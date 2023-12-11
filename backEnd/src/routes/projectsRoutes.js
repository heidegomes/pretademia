const { Router } = require('express');

const projectsController = require('../controllers/projectsController');

const projectsRouter = Router();
projectsRouter.get('/projects', projectsController.getAll);
projectsRouter.get('/entidadeEnsino', projectsController.getEntidadeEnsino);
projectsRouter.get('/programa', projectsController.getPrograma);

module.exports = projectsRouter;