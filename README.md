

Before review:
- README
- tidy commented code


Error Handling
- validation error messages all in one place - easy access for editing, and not show that working w Sequelize / MySQL. 

Next steps - functionality
- frontend / UI
- improve user experience  
    - not have to find the id number for genre / author when adding a 'book' entry
    - when searching by genre / author, currently it will includethe book association online. Within the book entries the genre / author is listed by id only- would be better if users could see all the details of each book in one go. 
- improve reader authentification - e.g. have a password recovery process eg via email
- readers 'borrowing' books from other readers
- short descriptions / summaries for each book entry

Next steps - design
- refactor tests to reduce repetition
- removing time stamps