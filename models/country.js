module.exports = function (sequelize, DataTypes) {
  const Country = sequelize.define("Country", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    refIdRocket: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Country.associate = function (models) {

    Country.hasMany(models.Company);
  };
  return Country;
};