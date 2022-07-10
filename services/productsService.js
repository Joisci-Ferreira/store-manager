const productsModel = require('../models/productsModel');

const getAll = async () => {
  const products = await productsModel.getAll();

  return products;
};

const findById = async (id) => {
  const product = await productsModel.findById(id);

  return product;
};

const create = async (name) => {
  const product = await productsModel.create(name);

  return product;
};

const productsService = {
  getAll,
  findById,
  create,
};

module.exports = productsService;