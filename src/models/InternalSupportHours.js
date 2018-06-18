export default (sequelize, DataTypes) => {
  const InternalSupportHours = sequelize.define('InternalSupportHours', {
    startTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  InternalSupportHours.associate = models => {
    InternalSupportHours.belongsTo(models.DayOfWeek, {
      foreignKey: { name: 'dayOfWeekId', allowNull: false },
    });
    InternalSupportHours.belongsTo(models.SystemDetails, {
      foreignKey: { name: 'systemId', allowNull: false },
    });
  };

  return InternalSupportHours;
};
