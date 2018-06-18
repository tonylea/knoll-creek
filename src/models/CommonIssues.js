export default (sequelize, DataTypes) => {
  const CommonIssues = sequelize.define('CommonIssues', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    symptoms: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    solution: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  CommonIssues.associate = models => {
    CommonIssues.belongsTo(models.SystemDetails, {
      foreignKey: { name: 'systemDetailsId', allowNull: false },
    });
  };

  return CommonIssues;
};
