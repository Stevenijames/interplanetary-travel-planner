module.exports = function (sequelize, DataTypes) {
  const Rocket = sequelize.define("Rocket", {
    rocketName: DataTypes.STRING,
    modelName: DataTypes.STRING,
    payload: DataTypes.STRING,
    fuel: DataTypes.INTEGER,
    range: DataTypes.INTEGER,
    capacity: DataTypes.INTEGER,
    cruisingSpeed: DataTypes.INTEGER,
    launchCost: DataTypes.INTEGER,
    refIdCountry: DataTypes.INTEGER,
    refIdCompany: DataTypes.INTEGER
  });
  return Rocket;
};