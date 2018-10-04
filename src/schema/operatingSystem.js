export default `
  type OperatingSystem {
    id: Int!
    name: String!
    endOfLife: String!
  }

  type Query {
    getOperatingSystem(id: Int!): OperatingSystem!
    allOperatingSystems: [OperatingSystem!]!
  }

  type Mutation {
    addOperatingSystem(name: String!, endOfLife: String!): Boolean!
  }
`;
