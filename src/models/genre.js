module.exports = (connection, DataTypes) => {
    const schema = {
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notNull: {
                args: [true],
                msg: "A genre needs to be entered",
                },
                notEmpty: {
                args: [true],
                msg: "A genre needs to be entered",
                },
            },
        },
    };

    const GenreModel = connection.define('Genre', schema);
    return GenreModel;
};