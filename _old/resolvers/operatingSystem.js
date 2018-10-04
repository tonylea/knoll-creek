export default {
  Query: {
    getOperatingSystem: (_, { id }, { models }) =>
      models.OperatingSystem.findOne({ where: { id } }),
    allOperatingSystems: (_, args, { models }) => models.OperatingSystem.findAll(),
  },
  Mutation: {
    addOperatingSystem: async (_, args, { models }) => {
      try {
        await models.OperatingSystem.create(args);
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
};
