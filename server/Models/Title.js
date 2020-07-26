import { Model } from "sequelize"

export class Title extends Model {
  static init(sequelize, DataTypes) {
    super.init({
      name: DataTypes.STRING
    },
    // options
    {
      // need to pass the connection instance
      sequelize,
  
      // model name
      modelName: "Title",
  
      // define the table name
      tableName: 'titles',
  
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

    // associated dragon
    this.belongsToMany(models.Dragon, { through: 'dragons_titles', as: 'dragons' })
  }
}

export const TitleModel = Title
export default Title
