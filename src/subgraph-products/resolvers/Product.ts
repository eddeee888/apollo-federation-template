import type { ProductResolvers } from "./../types.generated";
export const Product: ProductResolvers = {
  __resolveReference: async ({ id }, { database }) => {
    return database.products[id];
  },
};
