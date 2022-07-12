const sinon = require('sinon');
const { expect } = require('chai');
const salesController = require('../../../controllers/salesController');
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
  const response = {};
  const request = {};

  before(() => {
    request.body = {};

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(salesService, 'getAll').resolves(sales);
  });

  after(() => {
    salesService.getAll.restore();
  });

  it('Testa se retorna status 200 ao utilizar a rota getAll', async () => {
    await salesController.getAll(request, response)

    expect(response.status.calledWith(200)).to.be.equal(true);
  })
}) 