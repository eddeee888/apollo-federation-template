import type { CodegenConfig } from "@graphql-codegen/cli";
import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";

const config: CodegenConfig = {
  hooks: {
    afterAllFileWrite: ["prettier --write"],
  },
  generates: {
    "src/subgraph-connections": defineConfig(
      {
        mode: "merged",
        mergeSchema: false,
        resolverRelativeTargetDir: "resolvers",
        typesPluginsConfig: {
          federation: true,
          contextType: "./index#ServerContext",
          generateInternalResolversIfNeeded: {
            __resolveReference: false,
          },
        },
      },
      {
        schema: "src/subgraph-connections/schema.graphql",
      }
    ),

    "src/subgraph-products": defineConfig(
      {
        mode: "merged",
        mergeSchema: false,
        resolverRelativeTargetDir: "resolvers",
        typesPluginsConfig: {
          federation: true,
          contextType: "./index#ServerContext",
          generateInternalResolversIfNeeded: {
            __resolveReference: false,
          },
        },
      },
      {
        schema: "src/subgraph-products/schema.graphql",
      }
    ),

    "src/subgraph-users": defineConfig(
      {
        mode: "merged",
        mergeSchema: false,
        resolverRelativeTargetDir: "resolvers",
        typesPluginsConfig: {
          federation: true,
          contextType: "./index#ServerContext",
          generateInternalResolversIfNeeded: {
            __resolveReference: false,
          },
        },
      },
      {
        schema: "src/subgraph-users/schema.graphql",
      }
    ),
  },
};

export default config;
