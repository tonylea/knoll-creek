export default (sequelize, DataTypes) => {
  const OperatingSystem = sequelize.define('operatingSystem', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    endOfLife: DataTypes.DATE,
  });

  return OperatingSystem;
};
