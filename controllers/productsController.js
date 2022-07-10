const productsService = require('../services/productsService');

const getAll = async (_req, res) => {
  const products = await productsService.getAll();

  res.status(200).json(products);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const product = await productsService.findById(Number(id));

  if (product.length === 0) {
    res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(...product);
};

const create = async (req, res) => {
  const { name } = req.body;
  const product = await productsService.create(name);

  res.status(201).json(product);
};

const productsController = {
  getAll,
  findById,
  create,
};

module.exports = productsController;