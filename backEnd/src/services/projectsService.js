const projectsModel = require('../models/projectsModel');

const getAll = async (object) => {
  const result = await projectsModel.getAll(object);
  return result;
};

module.exports = {
  getAll,
};