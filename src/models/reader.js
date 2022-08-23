module.exports = (connection, DataTypes) => {
    const schema = {
        name: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: { 
                notNull: true,
                notEmpty: true, 
            },
        },
        email: { 
            type: DataTypes.STRING,
            allowNull:false,
            validate: { 
                notNull: true,
                notEmpty: true, 
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: { 
                notNull: true,
                notEmpty: true, 
            },
        },
    };

    const ReaderModel = connection.define('Reader', schema);
    return ReaderModel;
};



