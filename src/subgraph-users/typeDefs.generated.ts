import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "SchemaExtension",
      directives: [
        {
          kind: "Directive",
          name: { kind: "Name", value: "link" },
          arguments: [
            {
              kind: "Argument",
              name: { kind: "Name", value: "url" },
              value: {
                kind: "StringValue",
                value: "https://specs.apollo.dev/federation/v2.0",
                block: false,
              },
            },
            {
              kind: "Argument",
              name: { kind: "Name", value: "import" },
              value: {
                kind: "ListValue",
                values: [
                  { kind: "StringValue", value: "@key", block: false },
                  { kind: "StringValue", value: "@shareable", block: false },
                ],
              },
            },
          ],
        },
      ],
      operationTypes: [
        {
          kind: "OperationTypeDefinition",
          type: { kind: "NamedType", name: { kind: "Name", value: "Query" } },
          operation: "query",
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query" },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "me" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "User" } },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User" },
      interfaces: [],
      directives: [
        {
          kind: "Directive",
          name: { kind: "Name", value: "key" },
          arguments: [
            {
              kind: "Argument",
              name: { kind: "Name", value: "fields" },
              value: { kind: "StringValue", value: "id", block: false },
            },
          ],
        },
      ],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "username" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
      ],
    },
  ],
} as unknown as DocumentNode;
