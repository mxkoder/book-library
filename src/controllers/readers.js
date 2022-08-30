//const { Reader } = require('../models');
//const readerErrorHandling = require('./helper-functions/validation-error-handling');
//const { createRecord } = require('./helper-fn-CRUD-operations');

const {
    getAllItems,
    createItem,
    updateItem,
    getItemById,
    deleteItem,
} = require('./helper-fn-CRUD-operations');

const getAllReaders = (_, res) => getAllItems(res, 'reader');

const createReader = (req, res) => createItem(res, 'reader', req.body);

const updateReader = (req, res) =>
updateItem(res, 'reader', req.body, req.params.id);

const getReaderById = (req, res) => getItemById(res, 'reader', req.params.id);

const deleteReader = (req, res) => deleteItem(res, 'reader', req.params.id);

module.exports = {
    getAllReaders,
    getReaderById,
    createReader,
    updateReader,
    deleteReader,
};

//====================================================================
// const createReader = (req, res) => createRecord(res, 'reader', req.body);

// exports.read = async (_, res) => {
//     const readers = await Reader.findAll();
//     res.status(200).json(readers);
// };

// exports.readByReaderId = async (req, res) => {
//     const readerId = req.params.id;
//     const reader = await Reader.findByPk(readerId);

//     if(!reader) {
//         res.status(404).send({ error: 'The reader could not be found.' });
//     } else {
//         res.status(200).json(reader);
//     }
// };

// exports.updateReader = async (req, res) => {
//     const readerId = req.params.id;
//     const updateData = req.body;

//     try {
//         const [ updatedRows ] = await Reader.update(updateData, { 
//             where: { id: readerId  } });

//         if (!updatedRows) {
//             res.status(404).send({ error: 'The reader could not be found.' });
//         } else {
//             res.sendStatus(200);
//         }
//     } catch (err) {
//         console.error(err);

//         const userErrMessageUpdate = readerErrorHandling(err);
//         res.status(500).send(userErrMessageUpdate);
//     };
// };

// exports.deleteReader = async (req, res) => {
//     const readerId = req.params.id;

//     try {
//         const deletedRows = await Reader.destroy({ 
//             where: { id: readerId  } });

//         if (!deletedRows) {
//             res.status(404).send({ error: 'The reader could not be found.' });
//         } else {
//             res.sendStatus(204);
//         }
//     } catch (err) {
//         console.error(err);
//         res.sendStatus(500);
//     };
// };

// module.exports = {
//     //getReaders,
//     //getReaderById,
//     createReader,
//     //updateReader,
//     //deleteReader,
// };

