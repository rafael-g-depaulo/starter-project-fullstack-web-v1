import { Model } from "sequelize"
import { createHash, compareHash } from "Utils/hash"

export class User extends Model {
  static init(sequelize, DataTypes) {
    super.init({
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: { args: true, msg: "uma conta com esse email já existe" },
        validate: {
          isEmail: { args: true, msg: "formato de email não válido" },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          minLength(value) {
            if (value.length < 6)
              throw new Error('senha deve conter pelo menos 6 caracteres')
          },
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    // options
    {
      // need to pass the connection instance
      sequelize,
  
      // model name
      modelName: "User",
  
      // define the table name
      tableName: 'users',
  
      // if true, add timestamps to table (updatedAt, createdAt)
      timestamps: true,
  
      // if true, doesn't delete rows, instead adds a deletedAt column, if timestamps is true
      paranoid: false,
  
      // if true, uses snake_case instead of camelCase to generated attributes
      // ex: created_at instead of createdAt
      underscored: true,
  
      // hooks
      hooks: {
        beforeCreate: async (user, options) => {
          try {
            user.password = await createHash(user.password)
          } catch (error) {
            console.error("ERROR IN USER CREATION:", error)
          }
        }
      },
    })
  }

  static associate(models) {
    
  }

  // check user password
  async checkPassword(password) {
    try {
      return await compareHash(password, this.password)
    } catch {
      // if error with hash, return false
      return false
    }
  }
}

export default User
