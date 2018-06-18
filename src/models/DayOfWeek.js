export default (sequelize, DataTypes) => {
  const DayOfWeek = sequelize.define('DayOfWeek', {
    dayInt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    dayName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  return DayOfWeek;
};
