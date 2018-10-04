export default {
  Query: {
    getDayOfWeek: (_, { id }, { models }) =>
      models.DayOfWeek.findOne({ where: { id } }),
    allDaysOfWeek: (_, args, { models }) => models.DayOfWeek.findAll()
  },
  Mutation: {
    addDayOfWeek: async (_, args, { models }) => {
      try {
        await models.DayOfWeek.create(args);
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    }
  }
};
