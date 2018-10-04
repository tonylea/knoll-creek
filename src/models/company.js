export default (sequelize, DataTypes) => {
  const Company = sequelize.define('company', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    mainPhone: {
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    website: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  return Company;
};
