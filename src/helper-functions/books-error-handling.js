const bookErrorHandling = (err) => {

    let errorMessage;

    switch (err.errors[0].message) {

        case 'Validation notEmpty on title failed':
            errorMessage = { error: 'Please enter a book title' };
            break;
        case 'Validation notEmpty on author failed':
            errorMessage = { error: 'Please enter the author of the book' };
            break;
        default:
            errorMessage = { error: 'Internal server error' };
    };
    return errorMessage;
}; 

module.exports = bookErrorHandling