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

const updateProduct = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  const productId = await productsService.findById(id);

  if (productId.length === 0) {
    return res.status(404).json({ message: 'Product not found' });
  }

  const product = await productsService.updateProduct(id, name);

  return res.status(200).json(product);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const productId = await productsService.findById(id);

  if (productId.length === 0) {
    return res.status(404).json({ message: 'Product not found' });
  }

  await productsService.deleteProduct(id);
  return res.status(204).send();
};

const productsController = {
  getAll,
  findById,
  create,
  updateProduct,
  deleteProduct,
};

module.exports = productsController;