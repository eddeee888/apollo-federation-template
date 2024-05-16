import { ApolloServer } from "@apollo/server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { startStandaloneServer } from "@apollo/server/standalone";
import { database } from "./database";
import { typeDefs } from "./typeDefs.generated";
import { resolvers } from "./resolvers.generated";

export interface ServerContext {
  database: typeof database;
}

const server = new ApolloServer<ServerContext>({
  schema: buildSubgraphSchema({ typeDefs, resolvers } as any),
});

startStandaloneServer(server, {
  context: async () => ({ database }),
  listen: { port: 9300 },
}).then(({ url }) => {
  console.log(`🚀 subgraph-connections ready at ${url}`);
});
