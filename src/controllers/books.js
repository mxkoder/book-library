const {
    getAllItems,
    createItem,
    updateItem,
    getItemById,
    deleteItem,
} = require('./helper-fn-CRUD-operations');

const getAllBooks = (_, res) => getAllItems(res, 'book');

const createBook = (req, res) => createItem(res, 'book', req.body);

const updateBook = (req, res) =>
updateItem(res, 'book', req.body, req.params.id);

const getBookById = (req, res) => getItemById(res, 'book', req.params.id);

const deleteBook = (req, res) => deleteItem(res, 'book', req.params.id);

module.exports = {
    getAllBooks,
    createBook,
    updateBook,
    getBookById,
    deleteBook,
};

// const { Book } = require('../models');
// const bookErrorHandling = require('./helper-fn-validation-error-handling');

// exports.create = async (req, res) => {
//     try {
//         const newBook = await Book.create(req.body);
//         res.status(201).json(newBook);

//     } catch (err) {
//         const userErrMessageCreate = bookErrorHandling(err); 
//         res.status(500).send(userErrMessageCreate); 
//     };

// };

// exports.read = async (_, res) => {
//     const books = await Book.findAll();
//     res.status(200).json(books);
// };

// exports.readByBookId = async (req, res) => {
//     const bookId = req.params.id;
//     const selectedBook = await Book.findByPk(bookId);

//     if(!selectedBook) {
//         res.status(404).send({ error: 'The book could not be found.' });
//     } else {
//         res.status(200).json(selectedBook);
//     }
// };

// exports.updateBook = async (req, res) => {
//     const bookId = req.params.id;
//     const updateData = req.body;

//     try {
//         const [ updatedRows ] = await Book.update(updateData, { 
//             where: { id: bookId  } });

//         if (!updatedRows) {
//             res.status(404).send({ error: 'The book could not be found.' });
//         } else {
//             res.sendStatus(200);
//         }
//     } catch (err) {
//         console.error(err);
//         const userErrMessageUpdate = bookErrorHandling(err); 
//         res.status(500).send(userErrMessageUpdate); 
//     };
// };

// exports.deleteBook = async (req, res) => {
//     const bookId = req.params.id;

//     try {
//         const deletedRows = await Book.destroy({ 
//             where: { id: bookId  } });

//         if (!deletedRows) {
//             res.status(404).send({ error: 'The book could not be found.' });
//         } else {
//             res.sendStatus(204);
//         }
//     } catch (err) {
//         console.error(err);
//         res.sendStatus(500);
//     };
// };




