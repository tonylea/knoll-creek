export default (sequelize, DataTypes) => {
  const DatabaseDetails = sequelize.define('databaseDetails', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  DatabaseDetails.associate = models => {
    DatabaseDetails.belongsToMany(models.SystemDetails, {
      through: 'DatabaseDependencies',
      foreignKey: 'systemDetailsId',
    });
    DatabaseDetails.belongsTo(models.SqlInstance, {
      foreignKey: { name: 'sqlInstanceId', allowNull: false },
    });
  };

  return DatabaseDetails;
};
