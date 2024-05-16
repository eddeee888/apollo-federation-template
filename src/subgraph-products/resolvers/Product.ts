import type { ProductResolvers } from "./../types.generated";
export const Product: ProductResolvers = {
  __resolveReference: async ({ id }, { database }) => {
    console.log("*** products.Product.__resolveReference: ", id);
    return database.products[id];
  },
  name: async (parent, _arg, _ctx) => {
    console.log("*** products.Product.name: ", parent);
    return parent.isbn + `: - Product ${parent.id}`;
  },
};
