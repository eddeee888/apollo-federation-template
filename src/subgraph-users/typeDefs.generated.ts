import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "SchemaExtension",
      directives: [
        {
          kind: "Directive",
          name: { kind: "Name", value: "link", loc: { start: 15, end: 19 } },
          arguments: [
            {
              kind: "Argument",
              name: { kind: "Name", value: "url", loc: { start: 20, end: 23 } },
              value: {
                kind: "StringValue",
                value: "https://specs.apollo.dev/federation/v2.0",
                block: false,
                loc: { start: 25, end: 67 },
              },
              loc: { start: 20, end: 67 },
            },
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "import",
                loc: { start: 69, end: 75 },
              },
              value: {
                kind: "ListValue",
                values: [
                  {
                    kind: "StringValue",
                    value: "@key",
                    block: false,
                    loc: { start: 78, end: 84 },
                  },
                  {
                    kind: "StringValue",
                    value: "@shareable",
                    block: false,
                    loc: { start: 86, end: 98 },
                  },
                ],
                loc: { start: 77, end: 99 },
              },
              loc: { start: 69, end: 99 },
            },
          ],
          loc: { start: 14, end: 100 },
        },
      ],
      operationTypes: [],
      loc: { start: 0, end: 100 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 107, end: 112 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "me", loc: { start: 117, end: 119 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 121, end: 125 },
            },
            loc: { start: 121, end: 125 },
          },
          directives: [],
          loc: { start: 117, end: 125 },
        },
      ],
      loc: { start: 102, end: 127 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 134, end: 138 } },
      interfaces: [],
      directives: [
        {
          kind: "Directive",
          name: { kind: "Name", value: "key", loc: { start: 140, end: 143 } },
          arguments: [
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "fields",
                loc: { start: 144, end: 150 },
              },
              value: {
                kind: "StringValue",
                value: "id",
                block: false,
                loc: { start: 152, end: 156 },
              },
              loc: { start: 144, end: 156 },
            },
          ],
          loc: { start: 139, end: 157 },
        },
      ],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 162, end: 164 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 166, end: 168 },
              },
              loc: { start: 166, end: 168 },
            },
            loc: { start: 166, end: 169 },
          },
          directives: [],
          loc: { start: 162, end: 169 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 172, end: 180 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 182, end: 188 },
              },
              loc: { start: 182, end: 188 },
            },
            loc: { start: 182, end: 189 },
          },
          directives: [],
          loc: { start: 172, end: 189 },
        },
      ],
      loc: { start: 129, end: 191 },
    },
  ],
  loc: { start: 0, end: 192 },
} as unknown as DocumentNode;
