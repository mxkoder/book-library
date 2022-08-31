module.exports = (connection, DataTypes) => {
    const schema = {
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notNull: {
                args: [true],
                msg: "An author needs to be entered",
                },
                notEmpty: {
                args: [true],
                msg: "An author needs to be entered",
                },
            },
        },
    };

    const AuthorModel = connection.define('Author', schema);
    return AuthorModel;
};