

Before review:
- README
- tidy commented code









# Book Library Project

[ note for Reviewer:
Ideally I would have completed more features on this project and written a more complete README. I hope to work on it more before including it in my Portfolio ]

## About
I created this project as part of the [Manchester Codes](https://www.manchestercodes.com/) software engineering course. The objective was to learn about creating a CRUD API using Express.js and Sequelize.

The API has access to Reader, Book, Genre, and Author tables. Users (Readers) are able to create an entry for themselves and associate books with their account. Genre and Author information is kept in seperate but associated tables, allowing users to search the database by genre or author.
There is also password authentification, and after a user creates a password it is hidden in the API, and other users are not able to access it. 

## Setup
The project uses JavaScript, Express.js, Node, and Sequelize.
Testing is done using Chai, Supertest, and Mocha. 

Download and initial setup: 
* Fork the project repository
* Get the project link, navigate to the local folder where the project should be installed, and run ``git clone`` 
* Switch to the newly installed project folder and run ``npm install``
* Use command ``npm test`` to run the test suite

### Local Environment Variables
The database environment variables are of not in the github repository. To setup environment variables locally, create '.env' and '.env.test' files at root level in the project directory. The variables then need to filled entered and filled in for both '.env' and '.env.test' files to connect to a database:

``DB_PASSWORD= //enter password
DB_NAME= //enter database name, or test database name
DB_USER= // enter database user type
DB_HOST=localhost
DB_PORT= //enter port
PORT= //enter port``

## Running the project
The Book Library project does not currently have a GUI and can be run locally.
For development, a database connection was setup by running a docker container, and nodemon was used to run a server locally. If the environment variables are setup, it can be used to connect to any database run locally.  



<!-- ![node REPL cruise ship navigation](/images/node-REPL-cruise-ship-use.png) -->

## Testing
Testing is completed using Chai, Supertest, and Mocha test lirbaries. 

The project has a pre-test and post-test script which creates and then drops the test environment database before and after each run of the test suite. 

## Error Handling
The valiation error handling is abstracted to the '../src/controllers/helper-fn-validation-error-handling.js' file. 
This keeps the validation and constraint error messages in one place, and the custom messages make the API more secure and keep the fact that Sequelize / MySQL is used hidden.  

## Next steps
<!-- The main objective of this project was to learn about basic principles of OOP and TDD. If I was to develop this project further I would:
* Add a GUI to make user interaction easier, a better option than the node REPL for non technical users!
* Add functionality to add or remove ports from the itinerary, or to include distances and distance calculations
* The codebase could be re-purposed for other uses, for example planning a biketour or a similar journey.  -->

### Next steps - functionality
- frontend / UI
- improve user experience  
    - not have to find the id number for genre / author when adding a 'book' entry
    - when searching by genre / author, currently it will includethe book association online. Within the book entries the genre / author is listed by id only- would be better if users could see all the details of each book in one go. 
    - need to add validation & constraints to make sure users add a GenreId and AuthorId when creating a book entry. 
- improve reader authentification - e.g. have a password recovery process eg via email
- readers 'borrowing' books from other readers
- short descriptions / summaries for each book entry

### Next steps - design
- Tests:
    - refactor tests to reduce repetition
    - Genre and Author test suites need tests adding to check Book associations are being returned for read and read by id api queries (Book test suite has this)
    - randomiser (faker.js???)
- removing time stamps


## Author

Agnes Beviz

[website](https://agnesbeviz.co.uk/) ｜ [twitter](https://twitter.com/mx_coder_) ｜ [linkedin](https://www.linkedin.com/in/agnes-beviz/)