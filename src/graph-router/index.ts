import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";

const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: "products", url: "http://localhost:9100" },
      { name: "users", url: "http://localhost:9200" },
      { name: "connections", url: "http://localhost:9300" },
    ],
  }),
});

const server = new ApolloServer({ gateway });

// Starting router later to allow subgraphs to start first
setTimeout(() => {
  startStandaloneServer(server, { listen: { port: 8888 } }).then(({ url }) => {
    console.log(`🚀 graph-router ready at ${url}`);
  });
}, 2000);
