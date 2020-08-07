module.exports = function (sequelize, DataTypes) {
  const Planet = sequelize.define("Planet", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    distance: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Planet.associate = function (models) {

    Planet.belongsTo(models.Rocket, {
      foreignKey: {
        name: "planetRockets",
        allowNull: false
      }
    });
  };

  return Planet;
};