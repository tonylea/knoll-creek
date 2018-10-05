export default (sequelize, DataTypes) => {
  const SystemDependencies = sequelize.define('systemDependencies', {
    notes: DataTypes.TEXT,
  });

  SystemDependencies.associate = models => {
    // 1:M
    SystemDependencies.belongsTo(models.SystemDetails, {
      foreignKey: {
        name: 'systemDetailsId',
        allowNull: false,
      },
    });
    // 1:M
    SystemDependencies.belongsTo(models.SystemDetails, {
      foreignKey: {
        name: 'dependantOnId',
        allowNull: false,
      },
    });
  };

  return SystemDependencies;
};
