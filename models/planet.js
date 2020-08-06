module.exports = function (sequelize, DataTypes) {
  const Planet = sequelize.define("Planet", {
    name: DataTypes.STRING
  });
  return Planet;
};