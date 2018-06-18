export default (sequelize, DataTypes) => {
  const CompanyDetails = sequelize.define('CompanyDetails', {
    businessName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    mainPhone: {
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    website: {
      type: DataTypes.STRING,
      unique: true,
    },
  });

  return CompanyDetails;
};
