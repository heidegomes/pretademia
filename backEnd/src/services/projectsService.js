const projectsModel = require('../models/projectsModel');

const getAll = async (object) => {
  const result = await projectsModel.getAll(object);
  return result;
};

const getEntidadeEnsino = async () => {
  const result = await projectsModel.getEntidadeEnsino();
  return result;
}

const getPrograma = async () => {
  const result = await projectsModel.getPrograma();
  return result;
}

const getGrandeAreaConhecimento = async () => {
  const result = await projectsModel.getGrandeAreaConhecimento();
  return result;
}
const getAreaConhecimento = async () => {
  const result = await projectsModel.getAreaConhecimento();
  return result;
}

module.exports = {
  getAll,
  getEntidadeEnsino,
  getPrograma,
  getGrandeAreaConhecimento,
  getAreaConhecimento,
};