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
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "resolvable",
                loc: { start: 178, end: 188 },
              },
              value: {
                kind: "BooleanValue",
                value: false,
                loc: { start: 190, end: 195 },
              },
              loc: { start: 178, end: 195 },
            },
          ],
          loc: { start: 159, end: 196 },
        },
        {
          kind: "Directive",
          name: { kind: "Name", value: "key", loc: { start: 198, end: 201 } },
          arguments: [
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "fields",
                loc: { start: 202, end: 208 },
              },
              value: {
                kind: "StringValue",
                value: "pId",
                block: false,
                loc: { start: 210, end: 215 },
              },
              loc: { start: 202, end: 215 },
            },
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "resolvable",
                loc: { start: 217, end: 227 },
              },
              value: {
                kind: "BooleanValue",
                value: true,
                loc: { start: 229, end: 233 },
              },
              loc: { start: 217, end: 233 },
            },
          ],
          loc: { start: 197, end: 234 },
        },
        {
          kind: "Directive",
          name: { kind: "Name", value: "key", loc: { start: 236, end: 239 } },
          arguments: [
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "fields",
                loc: { start: 240, end: 246 },
              },
              value: {
                kind: "StringValue",
                value: "compositeId { one two }",
                block: false,
                loc: { start: 248, end: 273 },
              },
              loc: { start: 240, end: 273 },
            },
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "resolvable",
                loc: { start: 275, end: 285 },
              },
              value: {
                kind: "BooleanValue",
                value: false,
                loc: { start: 287, end: 292 },
              },
              loc: { start: 275, end: 292 },
            },
          ],
          loc: { start: 235, end: 293 },
        },
        {
          kind: "Directive",
          name: { kind: "Name", value: "key", loc: { start: 295, end: 298 } },
          arguments: [
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "fields",
                loc: { start: 299, end: 305 },
              },
              value: {
                kind: "StringValue",
                value: "id compositeId { two three }",
                block: false,
                loc: { start: 307, end: 337 },
              },
              loc: { start: 299, end: 337 },
            },
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "resolvable",
                loc: { start: 339, end: 349 },
              },
              value: {
                kind: "BooleanValue",
                value: false,
                loc: { start: 351, end: 356 },
              },
              loc: { start: 339, end: 356 },
            },
          ],
          loc: { start: 294, end: 357 },
        },
      ],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 362, end: 364 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 366, end: 368 },
              },
              loc: { start: 366, end: 368 },
            },
            loc: { start: 366, end: 369 },
          },
          directives: [],
          loc: { start: 362, end: 369 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pId", loc: { start: 372, end: 375 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 377, end: 379 },
              },
              loc: { start: 377, end: 379 },
            },
            loc: { start: 377, end: 380 },
          },
          directives: [],
          loc: { start: 372, end: 380 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "compositeId",
            loc: { start: 383, end: 394 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ProductCompositeID",
                loc: { start: 396, end: 414 },
              },
              loc: { start: 396, end: 414 },
            },
            loc: { start: 396, end: 415 },
          },
          directives: [],
          loc: { start: 383, end: 415 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "productName",
            loc: { start: 418, end: 429 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 431, end: 437 },
              },
              loc: { start: 431, end: 437 },
            },
            loc: { start: 431, end: 438 },
          },
          directives: [],
          loc: { start: 418, end: 438 },
        },
      ],
      loc: { start: 146, end: 440 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProductCompositeID",
        loc: { start: 447, end: 465 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "one", loc: { start: 470, end: 473 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 475, end: 477 },
              },
              loc: { start: 475, end: 477 },
            },
            loc: { start: 475, end: 478 },
          },
          directives: [],
          loc: { start: 470, end: 478 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "two", loc: { start: 481, end: 484 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 486, end: 488 },
              },
              loc: { start: 486, end: 488 },
            },
            loc: { start: 486, end: 489 },
          },
          directives: [],
          loc: { start: 481, end: 489 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "three", loc: { start: 492, end: 497 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 499, end: 501 },
              },
              loc: { start: 499, end: 501 },
            },
            loc: { start: 499, end: 502 },
          },
          directives: [],
          loc: { start: 492, end: 502 },
        },
      ],
      loc: { start: 442, end: 504 },
    },
  ],
  loc: { start: 0, end: 505 },
} as unknown as DocumentNode;
