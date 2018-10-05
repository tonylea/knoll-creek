export default (sequelize, DataTypes) => {
  const Status = sequelize.define('status', {
    status: {
      type: DataTypes.STRING,
      unique: true,
    },
  });

  return Status;
};
