const validationErrorHandling = (err) => {

    let errorMessage;

    switch (err.errors[0].message) {
        // readers
        case 'Validation len on password failed':
            errorMessage = { error: 'Please enter a password longer than 8 characters' };
            break;
        case 'Validation isEmail on email failed':
            errorMessage = { error: 'Please enter a valid email address' };
            break;
        case 'Validation notEmpty on name failed':
            errorMessage = { error: 'Please enter a name' };
            break;
        case 'Validation notEmpty on email failed':
            errorMessage = { error: 'Please enter an email address' };
            break;
        case 'Validation notEmpty on password failed':
            errorMessage = { error: 'Please enter a password' };
            break;
        // books
        case 'Validation notEmpty on title failed':
            errorMessage = { error: 'Please enter a book title' };
            break;
        case 'Validation notEmpty on author failed':
            errorMessage = { error: 'Please enter the author of the book' };
            break;
        // authors
        case 'Author.author cannot be null':
            errorMessage = { error: 'Please enter the author of the book' };
            break;
        case 'author must be unique':
            errorMessage = { error: 'There is already an entry for this author, please enter a new author or use the existing author entry' };
            break;
        // genres
        case 'Validation notEmpty on genre failed':
            errorMessage = { error: 'Please enter a genre' };
            break;
        case 'genre must be unique':
            errorMessage = { error: 'There is already an entry for this genre, please enter a new genre or use the existing genre entry' };
            break;
        default:
            errorMessage = { error: 'The request could not be completed' };
    };
    return errorMessage;
}; 

module.exports = validationErrorHandling


// err.errors[0].message

        // //console.log('err.path ====>', err.path);
        // //console.log('err.errors ====>', err.errors);
        // console.log('err.errors[0].path ====>', err.errors[0].path);
        // console.log('err.errors[0].value ====>', err.errors[0].value);
        // //res.sendStatus(500);
        // //const newErrorMessage = myHelperFunction(err.message)

        // res.status(500).send(err.message); //instead newErrorMessage from helper function
        // //Make sure the controller knows how to handle the different error messages the model might throw.

        // //in helper function do - if 'err.message === Validation error: Validation len on password failed', send..


