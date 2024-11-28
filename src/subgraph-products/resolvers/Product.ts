import type { ProductResolvers } from "./../types.generated";
export const Product: ProductResolvers = {
  __resolveReference: async (ref, { database }) => {
    console.log("*** products.Product.__resolveReference: ", ref);
    return database.products[ref.id];
  },
  name: async (parent, _arg, _ctx) => {
    console.log("*** products.Product.name: ", parent);
    return parent.isbn + `: - Product ${parent.id}`;
  },
};
