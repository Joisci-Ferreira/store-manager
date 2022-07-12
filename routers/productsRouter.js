const express = require('express');

const router = express.Router();
const productsController = require('../controllers/productsController');
const { validateName } = require('../middlewares/validations');

router.get('/', productsController.getAll);
router.get('/:id', productsController.findById);
router.post('/', validateName, productsController.create);
router.put('/:id', validateName, productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;
