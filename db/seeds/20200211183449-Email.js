'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface
    .bulkInsert(
      'Emails',
      [
        {
          nome: "João",
          email: "joao.email.falso@teste.com",
          telefone: "(61) 99999 - 8888",
          mensagem: "Mensagem de teste. nada mais do que isso",
          fonte: "r5co.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Maria",
          email: "maria.email.falso@teste.com",
          telefone: "(61) 97777 - 8888",
          mensagem: "Mensagem de teste. nada mais do que isso",
          fonte: "r5co.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
    ),

  down: (queryInterface, Sequelize) => queryInterface
    .bulkDelete('Users', null, {})
  ,
};
