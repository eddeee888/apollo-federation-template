import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 5, end: 10 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "me", loc: { start: 15, end: 17 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "User", loc: { start: 19, end: 23 } },
            loc: { start: 19, end: 23 },
          },
          directives: [],
          loc: { start: 15, end: 23 },
        },
      ],
      loc: { start: 0, end: 25 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 32, end: 36 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 41, end: 43 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ID", loc: { start: 45, end: 47 } },
              loc: { start: 45, end: 47 },
            },
            loc: { start: 45, end: 48 },
          },
          directives: [],
          loc: { start: 41, end: 48 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 51, end: 59 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 61, end: 67 },
            },
            loc: { start: 61, end: 67 },
          },
          directives: [],
          loc: { start: 51, end: 67 },
        },
      ],
      loc: { start: 27, end: 69 },
    },
  ],
  loc: { start: 0, end: 70 },
} as unknown as DocumentNode;
