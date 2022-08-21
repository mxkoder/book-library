const { Reader } = require('../models');

exports.create = async (req, res) => {
    const newReader = await Reader.create(req.body);
    req.status(201).json(newReader);
};

