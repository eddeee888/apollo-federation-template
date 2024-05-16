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
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 117, end: 124 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 125, end: 127 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 129, end: 131 },
                  },
                  loc: { start: 129, end: 131 },
                },
                loc: { start: 129, end: 132 },
              },
              directives: [],
              loc: { start: 125, end: 132 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 135, end: 142 },
            },
            loc: { start: 135, end: 142 },
          },
          directives: [],
          loc: { start: 117, end: 142 },
        },
      ],
      loc: { start: 102, end: 144 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 151, end: 158 } },
      interfaces: [],
      directives: [
        {
          kind: "Directive",
          name: { kind: "Name", value: "key", loc: { start: 160, end: 163 } },
          arguments: [
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "fields",
                loc: { start: 164, end: 170 },
              },
              value: {
                kind: "StringValue",
                value: "id",
                block: false,
                loc: { start: 172, end: 176 },
              },
              loc: { start: 164, end: 176 },
            },
          ],
          loc: { start: 159, end: 177 },
        },
      ],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 182, end: 184 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 186, end: 188 },
              },
              loc: { start: 186, end: 188 },
            },
            loc: { start: 186, end: 189 },
          },
          directives: [],
          loc: { start: 182, end: 189 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 192, end: 196 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 198, end: 204 },
              },
              loc: { start: 198, end: 204 },
            },
            loc: { start: 198, end: 205 },
          },
          directives: [],
          loc: { start: 192, end: 205 },
        },
      ],
      loc: { start: 146, end: 207 },
    },
  ],
  loc: { start: 0, end: 208 },
} as unknown as DocumentNode;
