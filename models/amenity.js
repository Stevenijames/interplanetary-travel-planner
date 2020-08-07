module.exports = function (sequelize, DataTypes) {
  const Amenity = sequelize.define("Amenity", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  Amenity.associate = function (models) {

    Amenity.belongsTo(models.Rocket, {
      foreignKey: {
        name: "amenitiesByRocket",
        allowNull: false
      }
    });
  };

  return Amenity;
};