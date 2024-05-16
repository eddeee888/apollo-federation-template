import type { CodegenConfig } from "@graphql-codegen/cli";
import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";

const config: CodegenConfig = {
  hooks: {
    afterAllFileWrite: ["prettier --write"],
  },
  generates: {
    "src/subgraph-user": defineConfig(
      {
        mode: "merged",
        resolverRelativeTargetDir: "resolvers",
        typesPluginsConfig: {
          federation: true,
          contextType: "./index#ServerContext",
        },
      },
      {
        schema: "src/subgraph-user/schema.graphql",
      }
    ),
  },
};

export default config;
