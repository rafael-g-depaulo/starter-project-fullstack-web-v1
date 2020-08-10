'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    const [ marceline ] = await queryInterface.bulkInsert('dragons', [{
      name: 'Marceline',
      created_at: new Date(),
      updated_at: new Date(),
    }], { returning: true })

    const [ vampireQueen ]= await queryInterface.bulkInsert('titles', [{
      name: 'the vampire queen',
      created_at: new Date(),
      updated_at: new Date(),
    }], { returning: true })
    
    await queryInterface.bulkInsert('dragons_titles', [{
      dragon_id: marceline.id,
      title_id: vampireQueen.id,
      created_at: new Date(),
      updated_at: new Date(),
    }])
  },

  down: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkDelete('dragons', null, {})
    await queryInterface.bulkDelete('titles', null, {})
  
  }
};
