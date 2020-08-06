module.exports = function (sequelize, DataTypes) {
  const Amenity = sequelize.define("Amenity", {
    name: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    availability: DataTypes.BOOLEAN
  });
  return Amenity;
};