export default `
  type Company {
    id: Int!
    name: String!
    mainPhone: String
    email: String
    website: String
  }

  type Query {
    getCompany(id: Int!): Company!
    allCompanies: [Company!]!
  }

  type Mutation {
    addCompany(name: String!, mainPhone: String, email: String, website: String): Boolean!
  }
`;
