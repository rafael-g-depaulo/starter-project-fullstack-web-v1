'use strict';
module.exports = (sequelize, DataTypes) => {
  const Email = sequelize.define('Email', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING,
    mensagem: DataTypes.STRING,
    fonte: DataTypes.STRING
  }, {});
  Email.associate = function(models) {
    // associations can be defined here
  };
  return Email;
};