# TicTacToe
![](./assets/tictactoeschema.png)

### Improvements After Initial Completion
- use bootstrap instead of using your own CSS
- change up the database so that it limits the length of the password and the username because for now it's just accepting any length. 
- refactor app.js and possibly routes/index.js.
- add in password constraints that require users to have 1 capital letter, a number, and some kind of symbol in order to sign up (use regex).  
- rename the form actions so that they make a bit more sense. right now login.pug's form action is profile, but then in router.post('/profile') 
  it renders the profile view. So just fix it so that it's a bit more clear. 

### This is the command to use get the sessions tables f setup for my computer
- psql -U postgres tictactoe < node_modules/connect-pg-simple/table.sql