'use strict';
module.exports = (sequelize, DataTypes) => {
  var playermoves = sequelize.define('playermoves', {
    rowPosition: DataTypes.INTEGER,
    columnPosition: DataTypes.INTEGER,
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