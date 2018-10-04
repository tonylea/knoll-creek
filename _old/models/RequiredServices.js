export default (sequelize, DataTypes) => {
  const RequiredServices = sequelize.define('requiredServices', {
    service: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    notes: DataTypes.TEXT,
  });

  return RequiredServices;
};
