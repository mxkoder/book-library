const express = require('express');
const readersController = require('../controllers/readers');


const router = express.Router();

router.post('/', readersController.create);

router.get('/', readersController.read);
router.get('/:id', readersController.readByReaderId);

module.exports = router