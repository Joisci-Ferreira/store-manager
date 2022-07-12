const connection = require('./connection');

const salesProducts = async (saleId, productId, quantity) => {
  await connection.execute(
    'INSERT INTO StoreManager.sales_products(sale_id, product_id, quantity) VALUES(?, ?, ?);',
    [saleId, productId, quantity],
  );
  return (
    productId,
    quantity
  );
};

const create = async (sales) => {
  const [sale] = await connection.execute(
    'INSERT INTO StoreManager.sales(date) VALUES(NOW());',
  );

  const newSales = await Promise.all(
    sales.map((element) => salesProducts(sale.insertId, element.productId, element.quantity)),
  );

  const saleCreate = ({
    id: sale.insertId,
    itemsSold: newSales,
  });
  return saleCreate;
};

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
  const [sale] = await connection.execute(
    `SELECT 
     B.date, A.product_id AS 'productId', A.quantity 
     FROM 
     StoreManager.sales_products AS A
          INNER JOIN
     StoreManager.sales AS B
     ON A.sale_id = B.id
     WHERE id = ?;`,
    [id],
  );
  console.warn(sale);
  return sale;
};

const salesModel = {
  create,
  getAll,
  findById,
};

module.exports = salesModel;