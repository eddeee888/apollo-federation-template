import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";

const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: "products", url: "http://localhost:9100" },
      { name: "users", url: "http://localhost:9200" },
    ],
  }),
});

const server = new ApolloServer({ gateway });

startStandaloneServer(server, { listen: { port: 8888 } }).then(({ url }) => {
  console.log(`🚀  graph-router ready at ${url}`);
});
