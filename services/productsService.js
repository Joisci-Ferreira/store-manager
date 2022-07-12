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

const updateProduct = async (id, name) => {
  const product = await productsModel.updateProduct(id, name);

  return product;
};

const deleteProduct = async (id) => {
  const product = await productsModel.deleteProduct(id);

  return product;
};

const productsService = {
  getAll,
  findById,
  create,
  updateProduct,
  deleteProduct,
};

module.exports = productsService;