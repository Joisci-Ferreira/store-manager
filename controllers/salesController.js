const salesService = require('../services/salesService');

const create = async (req, res) => {
  const sale = await salesService.create(req.body);

  return res.status(201).json(sale);
};

const getAll = async (_req, res) => {
  const sales = await salesService.getAll();

  res.status(200).json(sales);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const sale = await salesService.findById(id);

  if (!sale || sale.length === 0) {
   return res.status(404).json({ message: 'Sale not found' });
  }

  res.status(200).json(sale);
};

const salesController = {
  create,
  getAll,
  findById,
};

module.exports = salesController;