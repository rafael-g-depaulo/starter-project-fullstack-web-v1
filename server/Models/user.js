import { Model } from "sequelize"

const pwdHashRegex = /^(?:\$2\$|\$2a\$|\$2b\$|\$2y\$)(?:\d{2}\$)(?:[a-zA-Z0-9\/\.]{53})$/
export class User extends Model {
  static init(sequelize, DataTypes) {
    super.init({
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          // bcrypt regex checker. i made that regex myself,
          // so remove the next line if stuff fucks up
          is: pwdHashRegex,
        }
      },
      name: DataTypes.STRING,
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
        // beforeCreate: (user, options) => user.id = uuid()
  
      }
    })
  }

  static associate(models) {
    
  }
}

export default User
