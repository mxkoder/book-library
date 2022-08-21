const { Reader } = require('../models');

exports.create = async (req, res) => {
    const newReader = await Reader.create(req.body);
    res.status(201).json(newReader);
};

exports.read = async (_, res) => {
    const readers = await Reader.findAll();
    res.status(200).json(readers);
};

exports.readByReaderId = async (req, res) => {
    const readerId = req.params.id;
    const reader = await Reader.findByPk(readerId);

    if(!reader) {
        res.status(404).send({ error: 'The reader could not be found.' });
    } else {
        res.status(200).json(reader);
    }
};

exports.updateReader = async (req, res) => {
    const readerId = req.params.id;
    const updateData = req.body;

    try {
        const [ updatedRows ] = await Reader.update(updateData, { 
            where: { id: readerId  } });

        if (!updatedRows) {
            res.status(404).send({ error: 'The reader could not be found.' });
        } else {
            res.sendStatus(200);
        }
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    };
};

exports.deleteReader = async (req, res) => {
    const readerId = req.params.id;

    try {
        const deletedRows = await Reader.destroy({ 
            where: { id: readerId  } });

        if (!deletedRows) {
            res.status(404).send({ error: 'The reader could not be found.' });
        } else {
            res.sendStatus(204);
        }
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    };
};




