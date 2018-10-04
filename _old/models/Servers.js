export default (sequelize, DataTypes) => {
  const Servers = sequelize.define('servers', {
    hostname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    serialNumber: DataTypes.STRING,
    lastPatch: DataTypes.DATE,
    notes: DataTypes.TEXT,
  });

  Servers.associate = models => {
    Servers.belongsToMany(models.Clusters, {
      through: 'ClusterDependencies',
      foreignKey: 'clusterId',
    });
    Servers.belongsToMany(models.SystemDetails, {
      through: 'ServerDependencies',
      foreignKey: 'serverId',
    });
    Servers.belongsTo(models.OperatingSystem, {
      foreignKey: { name: 'operatingSystemId', allowNull: false },
    });
    Servers.belongsTo(models.Location, {
      foreignKey: { name: 'locationId', allowNull: false },
    });
    Servers.belongsTo(models.CompanyDetails, {
      foreignKey: { name: 'managedBy', allowNull: false },
    });
    Servers.belongsTo(models.CompanyDetails, {
      foreignKey: { name: 'vendorId', allowNull: false },
    });
    Servers.belongsTo(models.Status, {
      foreignKey: { name: 'statusId', allowNull: false },
    });
  };

  return Servers;
};
