export default (sequelize, DataTypes) => {
  const ExternalSupportHours = sequelize.define('externalSupportHours', {
    startTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  ExternalSupportHours.associate = models => {
    ExternalSupportHours.belongsTo(models.DayOfWeek, {
      foreignKey: { name: 'dayOfWeekId', allowNull: false },
    });
    ExternalSupportHours.belongsTo(models.SystemDetails, {
      foreignKey: { name: 'systemId', allowNull: false },
    });
  };

  return ExternalSupportHours;
};
