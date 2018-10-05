export default `
  type Location {
    id: Int!
    name: String!
    notes: String
  }

  type Query {
    getLocation(id: Int!): Location!
    allLocations: [Location!]!
  }

  type Mutation {
    addLocation(name: String!, notes: String): Boolean
  }
`;
