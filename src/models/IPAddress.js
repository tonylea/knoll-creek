export default (sequelize, DataTypes) => {
  const IPAddress = sequelize.define('IPAddress', {
    ipAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    notes: DataTypes.TEXT,
  });

  IPAddress.associate = models => {
    IPAddress.belongsTo(models.Servers, {
      foreignKey: { name: 'serverId', allowNull: false },
    });
  };

  return IPAddress;
};
