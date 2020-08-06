module.exports = function (sequelize, DataTypes) {
  const siteOperator = sequelize.define("siteOperator", {
    name: DataTypes.STRING
  });
  return siteOperator;
};