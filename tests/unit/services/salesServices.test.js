const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../models/connection');
const salesModel = require('../../../models/salesModel');
const salesService = require('../../../services/salesService');

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
    const stubGetAll = sinon.stub(salesModel, 'getAll');

    stubGetAll.resolves(sales);
  });

  after(() => {
    salesModel.getAll.restore();
  });

  it('Testa se o retorno é um array com todos os produtos', async () => {
    const result = await salesModel.getAll();

    expect(result).to.be.an('array');
  });
});

describe('Testando findById', () => {
  before(() => {
    const stubFindById = sinon.stub(salesModel, 'findById');

    stubFindById.resolves([sales[0]]);
  });

  after(() => {
    salesModel.findById.restore();
  });

  it('Testa se o retorno é um array', async () => {
    const result = await salesModel.findById(1);

    expect(result).to.be.an('array');
  });
});