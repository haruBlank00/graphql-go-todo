import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:8080/",
  documents: ["./src/**/*.ts"],
  debug: true,
  verbose: true,
  overwrite: true,
  // ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/": {
      preset: "client-preset",
    },
  },
};

export default config;
