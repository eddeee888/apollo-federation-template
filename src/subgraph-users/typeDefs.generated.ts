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
                  {
                    kind: "StringValue",
                    value: "@requires",
                    block: false,
                    loc: { start: 126, end: 137 },
                  },
                ],
                loc: { start: 77, end: 138 },
              },
              loc: { start: 69, end: 138 },
            },
          ],
          loc: { start: 14, end: 139 },
        },
      ],
      operationTypes: [],
      loc: { start: 0, end: 139 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 146, end: 151 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "me", loc: { start: 156, end: 158 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 160, end: 164 },
            },
            loc: { start: 160, end: 164 },
          },
          directives: [],
          loc: { start: 156, end: 164 },
        },
      ],
      loc: { start: 141, end: 166 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 173, end: 177 } },
      interfaces: [],
      directives: [
        {
          kind: "Directive",
          name: { kind: "Name", value: "key", loc: { start: 179, end: 182 } },
          arguments: [
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "fields",
                loc: { start: 183, end: 189 },
              },
              value: {
                kind: "StringValue",
                value: "id",
                block: false,
                loc: { start: 191, end: 195 },
              },
              loc: { start: 183, end: 195 },
            },
          ],
          loc: { start: 178, end: 196 },
        },
      ],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 201, end: 203 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 205, end: 207 },
              },
              loc: { start: 205, end: 207 },
            },
            loc: { start: 205, end: 208 },
          },
          directives: [],
          loc: { start: 201, end: 208 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 211, end: 219 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 221, end: 227 },
              },
              loc: { start: 221, end: 227 },
            },
            loc: { start: 221, end: 228 },
          },
          directives: [],
          loc: { start: 211, end: 228 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "favouriteProducts",
            loc: { start: 231, end: 248 },
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
                    loc: { start: 251, end: 258 },
                  },
                  loc: { start: 251, end: 258 },
                },
                loc: { start: 251, end: 259 },
              },
              loc: { start: 250, end: 260 },
            },
            loc: { start: 250, end: 261 },
          },
          directives: [],
          loc: { start: 231, end: 261 },
        },
      ],
      loc: { start: 168, end: 263 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 270, end: 277 } },
      interfaces: [],
      directives: [
        {
          kind: "Directive",
          name: { kind: "Name", value: "key", loc: { start: 279, end: 282 } },
          arguments: [
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "fields",
                loc: { start: 283, end: 289 },
              },
              value: {
                kind: "StringValue",
                value: "compositeId { one two }",
                block: false,
                loc: { start: 291, end: 316 },
              },
              loc: { start: 283, end: 316 },
            },
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "resolvable",
                loc: { start: 318, end: 328 },
              },
              value: {
                kind: "BooleanValue",
                value: false,
                loc: { start: 330, end: 335 },
              },
              loc: { start: 318, end: 335 },
            },
          ],
          loc: { start: 278, end: 336 },
        },
        {
          kind: "Directive",
          name: { kind: "Name", value: "key", loc: { start: 338, end: 341 } },
          arguments: [
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "fields",
                loc: { start: 342, end: 348 },
              },
              value: {
                kind: "StringValue",
                value: "id compositeId { two three }",
                block: false,
                loc: { start: 350, end: 380 },
              },
              loc: { start: 342, end: 380 },
            },
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "resolvable",
                loc: { start: 382, end: 392 },
              },
              value: {
                kind: "BooleanValue",
                value: true,
                loc: { start: 394, end: 398 },
              },
              loc: { start: 382, end: 398 },
            },
          ],
          loc: { start: 337, end: 399 },
        },
        {
          kind: "Directive",
          name: { kind: "Name", value: "key", loc: { start: 401, end: 404 } },
          arguments: [
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "fields",
                loc: { start: 405, end: 411 },
              },
              value: {
                kind: "StringValue",
                value: "pId",
                block: false,
                loc: { start: 413, end: 418 },
              },
              loc: { start: 405, end: 418 },
            },
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "resolvable",
                loc: { start: 420, end: 430 },
              },
              value: {
                kind: "BooleanValue",
                value: false,
                loc: { start: 432, end: 437 },
              },
              loc: { start: 420, end: 437 },
            },
          ],
          loc: { start: 400, end: 438 },
        },
        {
          kind: "Directive",
          name: { kind: "Name", value: "key", loc: { start: 440, end: 443 } },
          arguments: [
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "fields",
                loc: { start: 444, end: 450 },
              },
              value: {
                kind: "StringValue",
                value: "id",
                block: false,
                loc: { start: 452, end: 456 },
              },
              loc: { start: 444, end: 456 },
            },
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "resolvable",
                loc: { start: 458, end: 468 },
              },
              value: {
                kind: "BooleanValue",
                value: false,
                loc: { start: 470, end: 475 },
              },
              loc: { start: 458, end: 475 },
            },
          ],
          loc: { start: 439, end: 476 },
        },
      ],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 481, end: 483 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 485, end: 487 },
              },
              loc: { start: 485, end: 487 },
            },
            loc: { start: 485, end: 488 },
          },
          directives: [],
          loc: { start: 481, end: 488 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pId", loc: { start: 491, end: 494 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 496, end: 498 },
              },
              loc: { start: 496, end: 498 },
            },
            loc: { start: 496, end: 499 },
          },
          directives: [],
          loc: { start: 491, end: 499 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "compositeId",
            loc: { start: 502, end: 513 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ProductCompositeID",
                loc: { start: 515, end: 533 },
              },
              loc: { start: 515, end: 533 },
            },
            loc: { start: 515, end: 534 },
          },
          directives: [],
          loc: { start: 502, end: 534 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "productName",
            loc: { start: 537, end: 548 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 550, end: 556 },
              },
              loc: { start: 550, end: 556 },
            },
            loc: { start: 550, end: 557 },
          },
          directives: [
            {
              kind: "Directive",
              name: {
                kind: "Name",
                value: "external",
                loc: { start: 559, end: 567 },
              },
              arguments: [],
              loc: { start: 558, end: 567 },
            },
          ],
          loc: { start: 537, end: 567 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "productNameBeta",
            loc: { start: 570, end: 585 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 587, end: 593 },
              },
              loc: { start: 587, end: 593 },
            },
            loc: { start: 587, end: 594 },
          },
          directives: [
            {
              kind: "Directive",
              name: {
                kind: "Name",
                value: "requires",
                loc: { start: 596, end: 604 },
              },
              arguments: [
                {
                  kind: "Argument",
                  name: {
                    kind: "Name",
                    value: "fields",
                    loc: { start: 605, end: 611 },
                  },
                  value: {
                    kind: "StringValue",
                    value: "productName",
                    block: false,
                    loc: { start: 613, end: 626 },
                  },
                  loc: { start: 605, end: 626 },
                },
              ],
              loc: { start: 595, end: 627 },
            },
          ],
          loc: { start: 570, end: 627 },
        },
      ],
      loc: { start: 265, end: 629 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProductCompositeID",
        loc: { start: 636, end: 654 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "one", loc: { start: 659, end: 662 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 664, end: 666 },
              },
              loc: { start: 664, end: 666 },
            },
            loc: { start: 664, end: 667 },
          },
          directives: [],
          loc: { start: 659, end: 667 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "two", loc: { start: 670, end: 673 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 675, end: 677 },
              },
              loc: { start: 675, end: 677 },
            },
            loc: { start: 675, end: 678 },
          },
          directives: [],
          loc: { start: 670, end: 678 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "three", loc: { start: 681, end: 686 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 688, end: 690 },
              },
              loc: { start: 688, end: 690 },
            },
            loc: { start: 688, end: 691 },
          },
          directives: [],
          loc: { start: 681, end: 691 },
        },
      ],
      loc: { start: 631, end: 693 },
    },
  ],
  loc: { start: 0, end: 694 },
} as unknown as DocumentNode;
