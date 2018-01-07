'use strict';
module.exports = (sequelize, DataTypes) => {
  var playermoves = sequelize.define('playermoves', {
    row: DataTypes.INTEGER,
    column: DataTypes.INTEGER,
    playerfk: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        playermoves.belongsTo(models.players)
      }
    }
  });
  return playermoves;
};