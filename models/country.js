module.exports = function (sequelize, DataTypes) {
  const Country = sequelize.define("Country", {
    name: DataTypes.STRING,
    refIdRocket: DataTypes.INTEGER
  });
  return Country;
};