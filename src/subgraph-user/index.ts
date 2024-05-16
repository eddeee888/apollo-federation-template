import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./typeDefs.generated";
import { resolvers } from "./resolvers.generated";

const server = new ApolloServer<{}>({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, { listen: { port: 8000 } }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
