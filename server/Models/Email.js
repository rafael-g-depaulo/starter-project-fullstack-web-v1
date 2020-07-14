import { Model, DataTypes } from "sequelize"

export class Email extends Model {
  static init(sequelize) {
    super.init(
      {
        firstName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        lastName: {
          type: DataTypes.STRING
        }
      },
      // options
      {
        // need to pass the connection instance
        sequelize,
        // model name
        modelName: "Email",
      },
    )
  }
  static associate(models) {
    // // example of association
    // this.hasOne(models.Mapping, { foreignKey: "user_id", as: "mapping" });
  }
}
export default Email
