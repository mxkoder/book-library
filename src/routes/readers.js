const express = require('express');
const readersController = require('../controllers/readers');


const router = express.Router();

router.post('/', readersController.create);

router.get('/', readersController.read);
router.get('/:id', readersController.readByReaderId);

router.patch('/:id', readersController.updateReader);

router.delete('/:id', readersController.deleteReader);

module.exports = router