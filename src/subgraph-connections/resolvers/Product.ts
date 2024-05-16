import type { ProductResolvers } from "./../types.generated";
export const Product: ProductResolvers = {
  tag: ({ tag }) => {
    console.log("*** connections.Product.tag");
    return tag;
  },
};
