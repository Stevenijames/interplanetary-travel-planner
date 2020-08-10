module.exports = function (sequelize, DataTypes) {
  const Rocket = sequelize.define("Rocket", {
    modelName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    passengers: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    range: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cruisingSpeed: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    launchCost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    refIdCompany: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Rocket.associate = function (models) {

    Rocket.belongsTo(models.Company, {
      foreignKey: {
        name: "companyRockets",
        allowNull: false
      }
    });

    Rocket.belongsToMany(models.Amenity, {
      through: "RocketAmenities"
    });

    Rocket.hasMany(models.Flight);

    Rocket.hasMany(models.Planet);
  };

  return Rocket;
};