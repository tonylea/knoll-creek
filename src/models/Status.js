export default (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  return Status;
};
