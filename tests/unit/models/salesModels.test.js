const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../models/connection');
const salesModel = require('../../../models/salesModel');

const sales = [
  {
    "saleId": 1,
    "date": "2022-07-11T20:50:21.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "saleId": 1,
    "date": "2022-07-11T20:50:21.000Z",
    "productId": 2,
    "quantity": 10
  },
  {
    "saleId": 2,
    "date": "2022-07-11T20:50:21.000Z",
    "productId": 3,
    "quantity": 15
  }
]

describe('Testando getAll', () => {
  before(() => {
    sinon.stub(connection, 'execute').resolves(sales);
  });

  after(() => {
    connection.execute.restore();
  });

  it('Testa se o retorno é um objeto', async () => {
    const result = await salesModel.getAll();

    expect(result).to.be.an('object');
  });
});

describe('Testando findById', () => {
  before(() => {
    const stubExecute = sinon.stub(connection, 'execute').resolves(sales);

    stubExecute.onCall(0).resolves([sales[0]]);
    stubExecute.onCall(1).resolves([[]]);
  });

  after(() => {
    connection.execute.restore();
  });

  it('Testa se a função retorna uma venda por id', async () => {
    const result = await salesModel.findById(1);

    expect(result).to.have.property('saleId');
    expect(result).to.have.property('date');
    expect(result).to.have.property('productId');
    expect(result).to.have.property('quantity');
  });
});
