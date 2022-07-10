const express = require('express');

const router = express.Router();
const productsController = require('../controllers/productsController');
const { validateName } = require('../middlewares/validations');

router.get('/', productsController.getAll);
router.get('/:id', productsController.findById);
router.post('/', validateName, productsController.create);

module.exports = router;
