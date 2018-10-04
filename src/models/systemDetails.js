export default (sequelize, DataTypes) => {
  const SystemDetails = sequelize.define('systemDetails', {
    systemName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    versionNumber: DataTypes.STRING,
    endOfLife: DataTypes.DATE,
    summaryPurpose: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    detailedPurpose: DataTypes.TEXT,
    installationDetails: DataTypes.TEXT,
    backupSolution: DataTypes.TEXT,
    additionalNotes: DataTypes.TEXT,
  });

  SystemDetails.associate = models => {
    SystemDetails.belongsToMany(models.DatabaseDetails, {
      through: 'DatabaseDependencies',
      foreignKey: 'systemDetailsId',
    });
    SystemDetails.belongsToMany(models.CompanyDirectContacts, {
      through: 'SystemContacts',
      foreignKey: 'systemDetailsId',
    });
    SystemDetails.belongsToMany(models.Servers, {
      through: 'ServerDependencies',
      foreignKey: 'systemDetailsId',
    });
    SystemDetails.belongsTo(models.Status, {
      foreignKey: { name: 'statusId', allowNull: false },
    });
  };

  return SystemDetails;
};
