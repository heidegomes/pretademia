const projectsModel = require('../models/projectsModel');

const getAll = async (object) => {
  const result = await projectsModel.getAll(object);
  return result;
};

const getEntidadeEnsino = async (object) => {
  const result = await projectsModel.getEntidadeEnsino();
  return result;
}

module.exports = {
  getAll,
  getEntidadeEnsino,
};