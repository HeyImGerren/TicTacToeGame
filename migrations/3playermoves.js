'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('playermoves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rowPosition: {
        type: Sequelize.INTEGER
      },
      columnPosition: {
        type: Sequelize.INTEGER
      },
      playerfk: {
        type: Sequelize.INTEGER,
        references:{
          model:'players',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('playermoves');
  }
};