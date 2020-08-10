module.exports = function (sequelize, DataTypes) {
  const Planet = sequelize.define("Planet", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    distance: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  });

  // Planet.associate = function (models) {


  // };

  return Planet;
};