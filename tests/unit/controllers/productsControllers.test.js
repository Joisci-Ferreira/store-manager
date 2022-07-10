const sinon = require('sinon');
const { expect } = require('chai');
const productsController = require('../../../controllers/productsController');
const productsService = require('../../../services/productsService');

const products = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

describe('Testando getAll', () => {
  const response = {};
  const request = {};

  before(() => {
    request.body = {};

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(productsService, 'getAll').resolves(products);
  });

  after(() => {
    productsService.getAll.restore();
  });

  it('Testa se retorna status 200 ao utilizar a rota getAll', async () => {
    await productsController.getAll(request, response)

    expect(response.status.calledWith(200)).to.be.equal(true);
  })
}) 