import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const resolvers = {
  Query: {
    me() {
      return { id: "1", username: "@ava" };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Note the top-level await!
const { url } = await startStandaloneServer(server);
console.log(`🚀  Server ready at ${url}`);
