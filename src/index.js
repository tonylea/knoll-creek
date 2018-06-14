import dotenv from 'dotenv';
import express from 'express';
import { json } from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './schema';
import resolvers from './resolvers';
import models from './models';

dotenv.config();

const PORT = process.env.SERVER_PORT;
const ENDPOINT = process.env.GRAPHQL_ENDPOINT;
// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();
app.use('/graphql', json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: `/${ENDPOINT}` }));

models.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Go to http://localhost:${PORT}/graphiql to run queries!`);
  });
});
