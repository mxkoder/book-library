const { Book } = require('../models');

exports.create = async (req, res) => {
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
};

exports.read = async (_, res) => {
    const books = await Book.findAll();
    res.status(200).json(books);
};

exports.readByBookId = async (req, res) => {
    const bookId = req.params.id;
    const selectedBook = await Book.findByPk(bookId);

    if(!selectedBook) {
        res.status(404).send({ error: 'The book could not be found.' });
    } else {
        res.status(200).json(selectedBook);
    }
};

exports.updateBook = async (req, res) => {
    const bookId = req.params.id;
    const updateData = req.body;

    try {
        const [ updatedRows ] = await Book.update(updateData, { 
            where: { id: bookId  } });

        if (!updatedRows) {
            res.status(404).send({ error: 'The book could not be found.' });
        } else {
            res.sendStatus(200);
        }
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    };
};

exports.deleteBook = async (req, res) => {
    const bookId = req.params.id;

    try {
        const deletedRows = await Book.destroy({ 
            where: { id: bookId  } });

        if (!deletedRows) {
            res.status(404).send({ error: 'The book could not be found.' });
        } else {
            res.sendStatus(204);
        }
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    };
};




