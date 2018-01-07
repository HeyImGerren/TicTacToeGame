'use strict';
module.exports = (sequelize, DataTypes) => {
  var players = sequelize.define('players', {
    gamesfk: DataTypes.INTEGER,
    winner: DataTypes.BOOLEAN,
    symbol: DataTypes.TEXT,
    myturn: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        players.belongsTo(models.games)
      }
    }
  });
  return players;
};