import type { ProductResolvers } from "./../types.generated";
export const Product: ProductResolvers = {
  __resolveReference: async (parent, { database }) => {
    console.log(
      "*** products.Product.__resolveReference: ",
      JSON.stringify(parent),
    );
    return database.products[parent.id];
  },
  name: async (parent, _arg, _ctx) => {
    console.log("*** products.Product.name: ", parent);
    return "products.Product.name: " + parent.isbn;
  },
  alternateName: async (parent, _arg, _ctx) => {
    console.log("*** products.Product.alternateName: ", parent);
    return "products.Product.alternateName: " + parent.isbn;
  },
};
