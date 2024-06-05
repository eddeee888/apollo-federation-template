import type { ProductResolvers } from "./../types.generated";
export const Product: ProductResolvers = {
  __resolveReference: (parent: any) => {
    const result = JSON.stringify(parent);
    console.log(`*** connections.Product.__resolveReference: ${result}`);
    return {
      id: result,
      pId: result,
      compositeId: {
        one: "1: " + result,
        two: "2: " + result,
        three: "3: " + result,
      },
      tag: `connections.Product.__resolveReference: ${result}`,
    };
  },
  tag: ({ tag }) => {
    console.log("*** connections.Product.tag");
    return tag;
  },
};
