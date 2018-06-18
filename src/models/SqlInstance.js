export default (sequelize, DataTypes) => {
  const SqlInstance = sequelize.define('SqlInstance', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    backupTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    backupLocation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  SqlInstance.associate = models => {
    SqlInstance.belongsTo(models.Servers, {
      foreignKey: 'serverId',
    });
    SqlInstance.belongsTo(models.Clusters, {
      foreignKey: 'clusterId',
    });
  };

  return SqlInstance;
};
