const salesModel = require('../models/salesModel');

const create = async (sales) => {
  const sale = await salesModel.create(sales);

  return sale;
};

const getAll = async () => {
  const sales = await salesModel.getAll();

  return sales;
};

const findById = async (id) => {
  const sale = await salesModel.findById(id);

  return sale;
};

const salesService = {
  create,
  getAll,
  findById,
};

module.exports = salesService;