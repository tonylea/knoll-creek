export default (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    notes: DataTypes.TEXT,
  });

  return Location;
};
