./node_modules/.bin/sequelize db:drop
./node_modules/.bin/sequelize db:create
./node_modules/.bin/sequelize db:migrate
psql -U postgres tictactoe < node_modules/connect-pg-simple/table.sql