const validationErrorHandling = require('./helper-fn-validation-error-handling');
const { Book, Reader, /*Genre*/ } = require('../models');

const get404Error = (model) => ({ error: `The ${model} could not be found.` });

const getModel = (model) => {
    const models = {
        book: Book,
        reader: Reader,
        //genre: Genre,
    };

    return models[model];
};

const getOptions = (model) => {
    //if (model === 'book') return { include: Genre };

    if (model === 'genre') return { include: Book };

    return {};
};

const removePassword = (obj) => {
    if (obj.hasOwnProperty('password')) {
        delete obj.password;
    }

    return obj;
};

const getAllItems = async (res, model) => {
    const Model = getModel(model);

    const options = getOptions(model);

    const items = await Model.findAll({...options})
        
    const itemsWithoutPassword = items.map((item) => {
        return removePassword(item.get());
    });

    res.status(200).json(itemsWithoutPassword);
};

const createItem = async (res, model, item) => {
    const Model = getModel(model);

    try {
        const newItem = await Model.create(item);
        const itemWithoutPassword = removePassword(newItem.get());
    
        res.status(201).json(itemWithoutPassword);
    } catch (err) {
        const userErrMessageCreate = validationErrorHandling(err); 
        res.status(400).send(userErrMessageCreate); 
    }
};

const updateItem = async (res, model, item, id) => {
    const Model = getModel(model);

    try {
        const [ updatedRows ]= await Model.update(item, { where: { id } });

        if (!updatedRows) {
            res.status(404).json(get404Error(model));
        } else {
            const updatedItem = await Model.findByPk(id);
            const itemWithoutPassword = removePassword(updatedItem.get());
            res.status(200).json(itemWithoutPassword);
        }
    } catch (err) {
        const userErrMessageUpdate = validationErrorHandling(err);
        res.status(400).send(userErrMessageUpdate);       
    };

};

const getItemById = async (res, model, id) => {
    const Model = getModel(model);

    const options = getOptions(model);

    const item = await Model.findByPk(id, { ...options });

    if (!item) {
        res.status(404).json(get404Error(model));
    } else {
        const itemWithoutPassword = removePassword(item.dataValues);
        res.status(200).json(itemWithoutPassword);
    }
};

const deleteItem = async (res, model, id) => {
    const Model = getModel(model);

    const itemsDeleted = await Model.destroy({ where: { id } });

    if (!itemsDeleted) {
        res.status(404).json(get404Error(model));
    } else {
        res.status(204).send();
    }
};

module.exports = {
    getAllItems,
    createItem,
    updateItem,
    getItemById,
    deleteItem,
};
 //============================================
// const createRecord = async (res, modelName, record) => {
//     const Model = getModel(modelName);

//     try {
//         const newRecord = await Model.create(record);
//         //const itemWithoutPassword = removePassword(newRecord.get());
//         res.status(201).json(newRecord/*itemWithoutPassword*/);

//     } catch (err) {
//         const userErrMessageCreate = validationErrorHandling(err); 
//         res.status(500).send(userErrMessageCreate); 
//     }
// };




// exports.create = async (req, res) => {
//     try {
//         const newBook = await Book.create(req.body);
//         res.status(201).json(newBook);

//     } catch (err) {
//         const userErrMessageCreate = bookErrorHandling(err); 
//         res.status(500).send(userErrMessageCreate); 
//     };

// };