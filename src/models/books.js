module.exports = (connection, DataTypes) => {
    const schema = {
        title: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: { 
                notNull: true,
                notEmpty: true, 
            },
        },
        author: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: { 
                notNull: true,
                notEmpty: true, 
            },
        },
        genre: {
            type: DataTypes.STRING,
        },
        ISBN: {
            type: DataTypes.STRING,
        },
    };

    const BookModel = connection.define('Book', schema);
    return BookModel;
};

// const schema = {
//     name: {
//         type: DataTypes.STRING,
//         allowNull:false,
//         validate: { 
//             notNull: true,
//             notEmpty: true, 
//         },
//     },
//     email: { 
//         type: DataTypes.STRING,
//         allowNull:false,
//         validate: { 
//             notNull: true,
//             notEmpty: true,
//             isEmail: true, 
//         },
//     },
//     password: {
//         type: DataTypes.STRING,
//         allowNull:false,
//         validate: { 
//             notNull: true,
//             notEmpty: true, 
//             len: [8,],
//         },
//     },
// };