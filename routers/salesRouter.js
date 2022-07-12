const express = require('express');

const router = express.Router();
const salesController = require('../controllers/salesController');
const { validateQuantity, validateProductId } = require('../middlewares/validations');

router.post('/', validateQuantity, validateProductId, salesController.create);
router.get('/', salesController.getAll);
router.get('/:id', salesController.findById);

module.exports = router;
