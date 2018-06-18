export default (sequelize, DataTypes) => {
  const SystemAlias = sequelize.define('SystemAlias', {
    alias: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  SystemAlias.associate = models => {
    SystemAlias.belongsTo(models.SystemDetails, {
      foreignKey: { name: 'systemDetailsId', allowNull: false },
    });
  };

  return SystemAlias;
};
