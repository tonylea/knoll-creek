export default (sequelize, DataTypes) => {
  const SqlInstance = sequelize.define('SqlInstance', {
    service: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    notes: DataTypes.TEXT,
  });

  return SqlInstance;
};
