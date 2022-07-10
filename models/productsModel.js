const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products;',
  );
  return products;
};

const findById = async (id) => {
  const [products] = await connection.execute(
    'SELECT id, name FROM StoreManager.products WHERE id = ?;',
    [id],
  );
  return products;
};

const create = async (name) => {
  const [products] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?);',
    [name],
  );
  const newProduct = {
    id: products.insertId,
    name,

  };
  return newProduct;
};

const productsModel = {
  getAll,
  findById,
  create,
};

module.exports = productsModel;