module.exports = function (sequelize, DataTypes) {
  const Flight = sequelize.define("Flight", {
    destination: {
      type: DataTypes.STRING,
      allowNull: false
    },
    arrivalTimeEst: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totalCost: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    flightNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  Flight.associate = function (models) {

    Flight.belongsToMany(models.Amenity, {
      through: "FlightAmenities"
    });

    Flight.belongsTo(models.Planet, {
      foreignKey: {
        allowNull: false
      }
    });

    Flight.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Flight;
};