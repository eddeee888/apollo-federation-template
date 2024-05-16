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
      name: { kind: "Name", value: "User", loc: { start: 107, end: 111 } },
      interfaces: [],
      directives: [
        {
          kind: "Directive",
          name: { kind: "Name", value: "key", loc: { start: 113, end: 116 } },
          arguments: [
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "fields",
                loc: { start: 117, end: 123 },
              },
              value: {
                kind: "StringValue",
                value: "id",
                block: false,
                loc: { start: 125, end: 129 },
              },
              loc: { start: 117, end: 129 },
            },
          ],
          loc: { start: 112, end: 130 },
        },
      ],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 135, end: 137 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 139, end: 141 },
              },
              loc: { start: 139, end: 141 },
            },
            loc: { start: 139, end: 142 },
          },
          directives: [],
          loc: { start: 135, end: 142 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "watchedProducts",
            loc: { start: 145, end: 160 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Product",
                    loc: { start: 163, end: 170 },
                  },
                  loc: { start: 163, end: 170 },
                },
                loc: { start: 163, end: 171 },
              },
              loc: { start: 162, end: 172 },
            },
            loc: { start: 162, end: 173 },
          },
          directives: [],
          loc: { start: 145, end: 173 },
        },
      ],
      loc: { start: 102, end: 175 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 182, end: 189 } },
      interfaces: [],
      directives: [
        {
          kind: "Directive",
          name: { kind: "Name", value: "key", loc: { start: 191, end: 194 } },
          arguments: [
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "fields",
                loc: { start: 195, end: 201 },
              },
              value: {
                kind: "StringValue",
                value: "id",
                block: false,
                loc: { start: 203, end: 207 },
              },
              loc: { start: 195, end: 207 },
            },
          ],
          loc: { start: 190, end: 208 },
        },
      ],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 213, end: 215 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 217, end: 219 },
              },
              loc: { start: 217, end: 219 },
            },
            loc: { start: 217, end: 220 },
          },
          directives: [],
          loc: { start: 213, end: 220 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "tag", loc: { start: 223, end: 226 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 228, end: 234 },
              },
              loc: { start: 228, end: 234 },
            },
            loc: { start: 228, end: 235 },
          },
          directives: [],
          loc: { start: 223, end: 235 },
        },
      ],
      loc: { start: 177, end: 237 },
    },
  ],
  loc: { start: 0, end: 238 },
} as unknown as DocumentNode;
