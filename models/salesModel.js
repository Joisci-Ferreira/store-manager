const connection = require('./connection');

const getAll = async () => {
  const [sales] = await connection.execute(
    `SELECT A.sale_id AS 'saleId', B.date, A.product_id AS 'productId',
     A.quantity FROM StoreManager.sales_products AS A
     INNER JOIN
     StoreManager.sales AS B ON A.sale_id = B.id;`,
  );

  return sales;
};

const findById = async (id) => {
  const [sales] = await connection.execute(
    `SELECT B.date, A.product_id AS 'productId',
     A.quantity FROM StoreManager.sales_products AS A
     INNER JOIN
     StoreManager.sales AS B ON A.sale_id = B.id
     WHERE id = ?;`,
    [id],
  );

  return sales;
};

const salesModel = {
  getAll,
  findById,
};

module.exports = salesModel;