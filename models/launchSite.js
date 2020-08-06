module.exports = function (sequelize, DataTypes) {
  const launchSite = sequelize.define("launchSite", {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    refIdOperatedBy: DataTypes.INTEGER
  });
  return launchSite;
};