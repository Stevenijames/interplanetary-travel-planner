module.exports = function (sequelize, DataTypes) {
  const Flight = sequelize.define("Flight", {
    refIdCompany: DataTypes.INTEGER,
    refIdRocket: DataTypes.INTEGER,
    destination: DataTypes.STRING,
    arrivalTimeEst: DataTypes.INTEGER,
    totalCost: DataTypes.INTEGER,
    includedAmenities: DataTypes.STRING,
    flightNumber: DataTypes.INTEGER,
    timestamp: DataTypes.INTEGER
  });
  return Flight;
};