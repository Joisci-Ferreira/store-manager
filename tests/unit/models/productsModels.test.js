const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../models/connection');
const productsModel = require('../../../models/productsModel');

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
    sinon.stub(connection, 'execute').resolves(products);
  });

  after(() => {
    connection.execute.restore();
  });

  it('Testa se o retorno é um objeto', async () => {
    const result = await productsModel.getAll();

    expect(result).to.be.an('object');
  });
});

describe('Testando findById', () => {
  before(() => {
    const stubExecute = sinon.stub(connection, 'execute').resolves(products);

    stubExecute.onCall(0).resolves([products[0]]);
    stubExecute.onCall(1).resolves([[]]);
  });

  after(() => {
    connection.execute.restore();
  });

  it('Testa se a função retorna um produto por id', async () => {
    const result = await productsModel.findById(1);

    expect(result).to.have.property('id');
    expect(result).to.have.property('name');
  });
});

const update = {
  "id": 1,
  "name": "Martelo do Batman"
};

describe('Testando updateProduct', () => {
  before(() => {
    sinon.stub(connection, 'execute').resolves(update);
  });

  after(() => {
    connection.execute.restore();
  });

  it('Testa se o retorno é um objeto', async () => {
    const result = await productsModel.updateProduct();

    expect(result).to.be.an('object');
  })
})