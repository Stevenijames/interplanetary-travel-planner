module.exports = function (sequelize, DataTypes) {
  const Flight = sequelize.define("Flight", {
    refIdCompany: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    refIdRocket: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: false
    },
    arrivalTimeEst: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totalCost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    includedAmenities: {
      type: DataTypes.STRING,
      allowNull: false
    },
    flightNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    timestamp: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Flight.associate = function (models) {

    Flight.belongsTo(models.Amenity, {
      through: "FlightAmenities"
    });

    Flight.belongsTo(models.Planet, {
      foreignKey: {
        name: "flightPlanet",
        allowNull: false
      }
    });
  };

  return Flight;
};