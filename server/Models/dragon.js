import { Model, DataTypes } from "sequelize"

export class Dragon extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
      },
      // options
      {
        // need to pass the connection instance
        sequelize,

        // model name
        modelName: "Dragon",

        // define the table name
        tableName: 'Dragons',

        // if true, add timestamps to table (updatedAt, createdAt)
        timestamps: false,

        // if true, doesn't delete rows, instead adds a deletedAt column, if timestamps is true
        paranoid: false,

        // if true, uses snake_case instead of camelCase to generated attributes
        // ex: created_at instead of createdAt
        underscored: false,

        // stop sequelize from automatically "pluralizing" the table name
        freezeTableName: true,

        // hooks
        hooks: {
          // beforeCreate: (user, options) => user.id = uuid()

        }
      },
    )
  }
  static associate(models) {
    // // example of association
    // this.hasOne(models.Mapping, { foreignKey: "user_id", as: "mapping" });
  }
}
export default Dragon
