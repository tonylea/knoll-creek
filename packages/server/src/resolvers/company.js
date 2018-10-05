export default {
  Query: {
    getCompany: (_, { id }, { models }) =>
      models.Company.findOne({ where: { id } }),
    allCompanies: (_, args, { models }) => models.Company.findAll()
  },
  Mutation: {
    addCompany: async (_, args, { models }) => {
      try {
        await models.Company.create(args);
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    }
  }
};
