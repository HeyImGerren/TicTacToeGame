'use strict';
module.exports = (sequelize, DataTypes) => {
  var games = sequelize.define('games', {
    numberofplayers: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return games;
};