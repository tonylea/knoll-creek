export default {
  Query: {
    getLocation: (_, { id }, { models }) =>
      models.Location.findOne({ where: { id } }),
    allLocations: (_, args, { models }) => models.Location.findAll()
  },
  Mutation: {
    addLocation: async (_, args, { models }) => {
      try {
        await models.Location.create(args);
        return true;
      } catch (err) {
        return false;
      }
    }
  }
};
