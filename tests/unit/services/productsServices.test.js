const chai = require('chai');
const sinon = require('sinon');
const { expect } = require('chai');
const productsModel = require('../../../models/productsModel');
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
  before(() => {
    const stubGetAll = sinon.stub(productsModel, 'getAll');

    stubGetAll.resolves(products);
  });

  after(() => {
    productsModel.getAll.restore();
  });

  it('Testa se o retorno é um array com todos os produtos', async () => {
    const result = await productsModel.getAll();

    expect(result).to.be.an('array');
  });
});

describe('Testando findById', () => {
  before(() => {
    const stubFindById = sinon.stub(productsModel, 'findById');

    stubFindById.resolves([products[0]]);
  });

  after(() => {
    productsModel.findById.restore();
  });

  it('Testa se o retorno é um array', async () => {
    const result = await productsModel.findById(1);

    expect(result).to.be.an('array');
  });
});

