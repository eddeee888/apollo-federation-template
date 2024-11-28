import type { ProductResolvers } from "./../types.generated";
export const Product: ProductResolvers = {
  __resolveReference: (ref) => {
    console.log("--- connections.Product.__resolveReference", ref);
    return {
      id: ref.id,
      tag: `connections.Product.__resolveReference: ${ref.id}`,
    };
  },
  tag: (parent) => {
    console.log("*** connections.Product.tag", parent);
    return parent.tag;
  },
};
