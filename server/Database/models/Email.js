import { DataTypes } from "sequelize"

export const Email = (sequelize) => sequelize.define('Email', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  }
}, {
  // aditional options here
})

export default Email
