export default {
  Query: {
    getOperatingSystem: async (_, { id }, { models }) => {
      const { name, endOfLife } = await models.OperatingSystem.findOne({
        where: { id }
      });
      const os = {
        name,
        id,
        endOfLife: endOfLife.toISOString()
      };
      return os;
    },
    allOperatingSystems: (_, args, { models }) =>
      models.OperatingSystem.findAll()
  },
  Mutation: {
    addOperatingSystem: async (_, args, { models }) => {
      try {
        await models.OperatingSystem.create(args);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  }
};
