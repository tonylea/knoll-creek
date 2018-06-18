export default (sequelize, DataTypes) => {
  const OperatingSystem = sequelize.define('OperatingSystem', {
    operatingSystem: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    endOfLife: DataTypes.DATE,
  });

  return OperatingSystem;
};
