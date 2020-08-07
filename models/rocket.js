module.exports = function (sequelize, DataTypes) {
  const Rocket = sequelize.define('Rocket', {
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
        name: 'companyRockets',
        allowNull: false
      }
    });

    Rocket.hasMany(models.Amenity, {
      onDelete: 'NO ACTION'
    });

    Rocket.hasMany(models.Flight, {
      onDelete: 'NO ACTION'
    });

    Rocket.hasMany(models.Planet, {
      onDelete: 'NO ACTION'
    });
  };

  return Rocket;
};