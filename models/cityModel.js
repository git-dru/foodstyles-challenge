module.exports = function CityDef(sequelize, type) {
  return sequelize.define(
    "city",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: type.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      defaultScope: {
        attributes: { exclude: ["createdAt", "updatedAt"] },
      },
    }
  );
}
