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
                  {
                    kind: "StringValue",
                    value: "@external",
                    block: false,
                    loc: { start: 100, end: 111 },
                  },
                  {
                    kind: "StringValue",
                    value: "@provides",
                    block: false,
                    loc: { start: 113, end: 124 },
                  },
                ],
                loc: { start: 77, end: 125 },
              },
              loc: { start: 69, end: 125 },
            },
          ],
          loc: { start: 14, end: 126 },
        },
      ],
      operationTypes: [],
      loc: { start: 0, end: 126 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 133, end: 138 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "me", loc: { start: 143, end: 145 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 147, end: 151 },
            },
            loc: { start: 147, end: 151 },
          },
          directives: [],
          loc: { start: 143, end: 151 },
        },
      ],
      loc: { start: 128, end: 153 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 160, end: 164 } },
      interfaces: [],
      directives: [
        {
          kind: "Directive",
          name: { kind: "Name", value: "key", loc: { start: 166, end: 169 } },
          arguments: [
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "fields",
                loc: { start: 170, end: 176 },
              },
              value: {
                kind: "StringValue",
                value: "id",
                block: false,
                loc: { start: 178, end: 182 },
              },
              loc: { start: 170, end: 182 },
            },
          ],
          loc: { start: 165, end: 183 },
        },
      ],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 188, end: 190 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 192, end: 194 },
              },
              loc: { start: 192, end: 194 },
            },
            loc: { start: 192, end: 195 },
          },
          directives: [],
          loc: { start: 188, end: 195 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 198, end: 206 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 208, end: 214 },
              },
              loc: { start: 208, end: 214 },
            },
            loc: { start: 208, end: 215 },
          },
          directives: [],
          loc: { start: 198, end: 215 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "favouriteProducts",
            loc: { start: 218, end: 235 },
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
                    loc: { start: 238, end: 245 },
                  },
                  loc: { start: 238, end: 245 },
                },
                loc: { start: 238, end: 246 },
              },
              loc: { start: 237, end: 247 },
            },
            loc: { start: 237, end: 248 },
          },
          directives: [],
          loc: { start: 218, end: 248 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "favouriteProducts_Name",
            loc: { start: 251, end: 273 },
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
                    loc: { start: 276, end: 283 },
                  },
                  loc: { start: 276, end: 283 },
                },
                loc: { start: 276, end: 284 },
              },
              loc: { start: 275, end: 285 },
            },
            loc: { start: 275, end: 286 },
          },
          directives: [
            {
              kind: "Directive",
              name: {
                kind: "Name",
                value: "provides",
                loc: { start: 288, end: 296 },
              },
              arguments: [
                {
                  kind: "Argument",
                  name: {
                    kind: "Name",
                    value: "fields",
                    loc: { start: 297, end: 303 },
                  },
                  value: {
                    kind: "StringValue",
                    value: "name",
                    block: false,
                    loc: { start: 305, end: 311 },
                  },
                  loc: { start: 297, end: 311 },
                },
              ],
              loc: { start: 287, end: 312 },
            },
          ],
          loc: { start: 251, end: 312 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "favouriteProducts_AlternateName",
            loc: { start: 315, end: 346 },
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
                    loc: { start: 349, end: 356 },
                  },
                  loc: { start: 349, end: 356 },
                },
                loc: { start: 349, end: 357 },
              },
              loc: { start: 348, end: 358 },
            },
            loc: { start: 348, end: 359 },
          },
          directives: [
            {
              kind: "Directive",
              name: {
                kind: "Name",
                value: "provides",
                loc: { start: 361, end: 369 },
              },
              arguments: [
                {
                  kind: "Argument",
                  name: {
                    kind: "Name",
                    value: "fields",
                    loc: { start: 370, end: 376 },
                  },
                  value: {
                    kind: "StringValue",
                    value: "alternateName",
                    block: false,
                    loc: { start: 378, end: 393 },
                  },
                  loc: { start: 370, end: 393 },
                },
              ],
              loc: { start: 360, end: 394 },
            },
          ],
          loc: { start: 315, end: 394 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "favouriteProducts_Both",
            loc: { start: 397, end: 419 },
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
                    loc: { start: 422, end: 429 },
                  },
                  loc: { start: 422, end: 429 },
                },
                loc: { start: 422, end: 430 },
              },
              loc: { start: 421, end: 431 },
            },
            loc: { start: 421, end: 432 },
          },
          directives: [
            {
              kind: "Directive",
              name: {
                kind: "Name",
                value: "provides",
                loc: { start: 434, end: 442 },
              },
              arguments: [
                {
                  kind: "Argument",
                  name: {
                    kind: "Name",
                    value: "fields",
                    loc: { start: 443, end: 449 },
                  },
                  value: {
                    kind: "StringValue",
                    value: "name alternateName",
                    block: false,
                    loc: { start: 451, end: 471 },
                  },
                  loc: { start: 443, end: 471 },
                },
              ],
              loc: { start: 433, end: 472 },
            },
          ],
          loc: { start: 397, end: 472 },
        },
      ],
      loc: { start: 155, end: 474 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 481, end: 488 } },
      interfaces: [],
      directives: [
        {
          kind: "Directive",
          name: { kind: "Name", value: "key", loc: { start: 490, end: 493 } },
          arguments: [
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "fields",
                loc: { start: 494, end: 500 },
              },
              value: {
                kind: "StringValue",
                value: "id",
                block: false,
                loc: { start: 502, end: 506 },
              },
              loc: { start: 494, end: 506 },
            },
          ],
          loc: { start: 489, end: 507 },
        },
      ],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 512, end: 514 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 516, end: 518 },
              },
              loc: { start: 516, end: 518 },
            },
            loc: { start: 516, end: 519 },
          },
          directives: [],
          loc: { start: 512, end: 519 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 522, end: 526 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 528, end: 534 },
              },
              loc: { start: 528, end: 534 },
            },
            loc: { start: 528, end: 535 },
          },
          directives: [
            {
              kind: "Directive",
              name: {
                kind: "Name",
                value: "external",
                loc: { start: 537, end: 545 },
              },
              arguments: [],
              loc: { start: 536, end: 545 },
            },
          ],
          loc: { start: 522, end: 545 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "alternateName",
            loc: { start: 548, end: 561 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 563, end: 569 },
              },
              loc: { start: 563, end: 569 },
            },
            loc: { start: 563, end: 570 },
          },
          directives: [
            {
              kind: "Directive",
              name: {
                kind: "Name",
                value: "external",
                loc: { start: 572, end: 580 },
              },
              arguments: [],
              loc: { start: 571, end: 580 },
            },
          ],
          loc: { start: 548, end: 580 },
        },
      ],
      loc: { start: 476, end: 582 },
    },
  ],
  loc: { start: 0, end: 583 },
} as unknown as DocumentNode;
