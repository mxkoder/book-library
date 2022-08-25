const { Reader } = require('../models');
// import error helper fn

exports.create = async (req, res) => {

    try {
        const newReader = await Reader.create(req.body);

        res.status(201).json(newReader);
    } catch (err) {
        console.error(err);
        console.log('err.message ====>', err.message);
        //console.log('err.path ====>', err.path);
        //console.log('err.errors ====>', err.errors);
        console.log('err.errors[0].path ====>', err.errors[0].path);
        console.log('err.errors[0].value ====>', err.errors[0].value);
        //res.sendStatus(500);
        //const newErrorMessage = myHelperFunction(err.message)

        res.status(500).send(err.message); //instead newErrorMessage from helper function
        //Make sure the controller knows how to handle the different error messages the model might throw.

        //in helper function do - if 'err.message === Validation error: Validation len on password failed', send..


    }
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




