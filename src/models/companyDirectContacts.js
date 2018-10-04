export default (sequelize, DataTypes) => {
  const CompanyDirectContacts = sequelize.define('companyDirectContacts', {
    givenName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    businessTitle: DataTypes.STRING,
    officeNumber: DataTypes.STRING,
    mobileNumber: DataTypes.STRING,
    email: DataTypes.STRING,
    additionalNotes: DataTypes.TEXT,
  });

  CompanyDirectContacts.associate = models => {
    CompanyDirectContacts.belongsToMany(models.SystemDetails, {
      through: 'SystemContacts',
      foreignKey: 'companyDirectContactId',
    });
    CompanyDirectContacts.belongsTo(models.CompanyDetails, {
      foreignKey: { name: 'companyDetailsId', allowNull: false },
    });
  };

  return CompanyDirectContacts;
};
