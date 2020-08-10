module.exports = function (sequelize, DataTypes) {
  const launchSite = sequelize.define("launchSite", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    refIdOperatedBy: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return launchSite;
};