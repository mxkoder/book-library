const express = require('express');
const booksController = require('../controllers/books');


const router = express.Router();

router.post('/', booksController.create);

router.get('/', booksController.read);
router.get('/:id', booksController.readByBookId);

router.patch('/:id', booksController.updateBook);

router.delete('/:id', booksController.deleteBook);

module.exports = router