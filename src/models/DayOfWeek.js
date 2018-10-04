export default (sequelize, DataTypes) => {
  const DayOfWeek = sequelize.define('dayOfWeek', {
    dayName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });

  return DayOfWeek;
};
