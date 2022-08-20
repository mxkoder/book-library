module.exports = (connection, DataTypes) => {
    const schema = {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
    };

    //pass in what we want our table to be called and the schema
    const ReaderModel = connection.define('Reader', schema);
    return ReaderModel;
}