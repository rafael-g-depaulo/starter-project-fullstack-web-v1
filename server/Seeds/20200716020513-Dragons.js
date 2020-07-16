'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Dragons', [
      {
        name: "Jonathan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ragathiel",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Dragons', null, {}); 
  }
};
