const salesService = require('../services/salesService');

const getAll = async (_req, res) => {
  const sales = await salesService.getAll();

  res.status(200).json(sales);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const sale = await salesService.findById(Number(id));

  if (sale.length === 0) {
    res.status(404).json({ message: 'Sale not found' });
  }

  res.status(200).json(sale);
};

const salesController = {
  getAll,
  findById,
};

module.exports = salesController;