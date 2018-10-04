export default `
  type DayOfWeek {
    id: Int!
    dayName: String!
  }

  type Query {
    getDayOfWeek(id: Int!): DayOfWeek!
    allDaysOfWeek: [DayOfWeek!]!
  }

  type Mutation {
    addDayOfWeek(dayName: String!): Boolean!
  }
`;
