export default {
  Query: {
    getStatus: (_, { id }, { models }) => models.Status.findOne({ where: { id } }),
    allStatuses: (_, args, { models }) => models.Status.findAll(),
  },
  Mutation: {
    addStatus: async (_, args, { models }) => {
      try {
        await models.Status.create(args);
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
};
