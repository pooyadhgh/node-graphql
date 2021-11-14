const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');

const postsRoutes = require('./routes/postsRoutes');

const graphqlSchema = require('./graphql/schema');
const graphqlResolvers = require('./graphql/resolvers');

const app = express();

app.use(bodyParser.json());

// REST API Middleware
app.use('/posts', postsRoutes);

// GraphQL Middlewqre
app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
);

app.listen(5000, console.log('Connected'));
