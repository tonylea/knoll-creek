export default `
  type Status {
    id: Int!
    status: String!
  }

  type Query {
    getStatus(id: Int!): Status!
    allStatuses: [Status!]!
  }

  type Mutation {
    addStatus(status: String!): Boolean!
  }
`;
