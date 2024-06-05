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
        {
          kind: "Directive",
          name: { kind: "Name", value: "key", loc: { start: 210, end: 213 } },
          arguments: [
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "fields",
                loc: { start: 214, end: 220 },
              },
              value: {
                kind: "StringValue",
                value: "pId",
                block: false,
                loc: { start: 222, end: 227 },
              },
              loc: { start: 214, end: 227 },
            },
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "resolvable",
                loc: { start: 229, end: 239 },
              },
              value: {
                kind: "BooleanValue",
                value: false,
                loc: { start: 241, end: 246 },
              },
              loc: { start: 229, end: 246 },
            },
          ],
          loc: { start: 209, end: 247 },
        },
        {
          kind: "Directive",
          name: { kind: "Name", value: "key", loc: { start: 249, end: 252 } },
          arguments: [
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "fields",
                loc: { start: 253, end: 259 },
              },
              value: {
                kind: "StringValue",
                value: "compositeId { one two }",
                block: false,
                loc: { start: 261, end: 286 },
              },
              loc: { start: 253, end: 286 },
            },
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "resolvable",
                loc: { start: 288, end: 298 },
              },
              value: {
                kind: "BooleanValue",
                value: false,
                loc: { start: 300, end: 305 },
              },
              loc: { start: 288, end: 305 },
            },
          ],
          loc: { start: 248, end: 306 },
        },
        {
          kind: "Directive",
          name: { kind: "Name", value: "key", loc: { start: 308, end: 311 } },
          arguments: [
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "fields",
                loc: { start: 312, end: 318 },
              },
              value: {
                kind: "StringValue",
                value: "id compositeId { two three }",
                block: false,
                loc: { start: 320, end: 350 },
              },
              loc: { start: 312, end: 350 },
            },
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "resolvable",
                loc: { start: 352, end: 362 },
              },
              value: {
                kind: "BooleanValue",
                value: false,
                loc: { start: 364, end: 369 },
              },
              loc: { start: 352, end: 369 },
            },
          ],
          loc: { start: 307, end: 370 },
        },
      ],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 375, end: 377 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 379, end: 381 },
              },
              loc: { start: 379, end: 381 },
            },
            loc: { start: 379, end: 382 },
          },
          directives: [],
          loc: { start: 375, end: 382 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pId", loc: { start: 385, end: 388 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 390, end: 392 },
              },
              loc: { start: 390, end: 392 },
            },
            loc: { start: 390, end: 393 },
          },
          directives: [],
          loc: { start: 385, end: 393 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "compositeId",
            loc: { start: 396, end: 407 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ProductCompositeID",
                loc: { start: 409, end: 427 },
              },
              loc: { start: 409, end: 427 },
            },
            loc: { start: 409, end: 428 },
          },
          directives: [],
          loc: { start: 396, end: 428 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "tag", loc: { start: 431, end: 434 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 436, end: 442 },
              },
              loc: { start: 436, end: 442 },
            },
            loc: { start: 436, end: 443 },
          },
          directives: [],
          loc: { start: 431, end: 443 },
        },
      ],
      loc: { start: 177, end: 445 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProductCompositeID",
        loc: { start: 452, end: 470 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "one", loc: { start: 475, end: 478 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 480, end: 482 },
              },
              loc: { start: 480, end: 482 },
            },
            loc: { start: 480, end: 483 },
          },
          directives: [],
          loc: { start: 475, end: 483 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "two", loc: { start: 486, end: 489 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 491, end: 493 },
              },
              loc: { start: 491, end: 493 },
            },
            loc: { start: 491, end: 494 },
          },
          directives: [],
          loc: { start: 486, end: 494 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "three", loc: { start: 497, end: 502 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 504, end: 506 },
              },
              loc: { start: 504, end: 506 },
            },
            loc: { start: 504, end: 507 },
          },
          directives: [],
          loc: { start: 497, end: 507 },
        },
      ],
      loc: { start: 447, end: 509 },
    },
  ],
  loc: { start: 0, end: 510 },
} as unknown as DocumentNode;
