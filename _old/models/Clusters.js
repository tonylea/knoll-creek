export default (sequelize, DataTypes) => {
  const Clusters = sequelize.define('clusters', {
    hostname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    notes: DataTypes.TEXT,
  });

  Clusters.associate = models => {
    Clusters.belongsToMany(models.Servers, {
      through: 'ClusterDependencies',
      foreignKey: { name: 'serverId', allowNull: false },
    });
  };

  return Clusters;
};
