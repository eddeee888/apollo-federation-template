import type { ProductResolvers } from "./../types.generated";
export const Product: ProductResolvers = {
  __resolveReference: ({ id }) => {
    console.log(`*** connections.Product.__resolveReference: ${id}`);
    return {
      id,
      tag: `connections.Product.__resolveReference: ${id}`,
    };
  },
  tag: ({ tag }) => {
    console.log("*** connections.Product.tag");
    return tag;
  },
};
