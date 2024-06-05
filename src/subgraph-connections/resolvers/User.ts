import type { UserResolvers } from "./../types.generated";
export const User: UserResolvers = {
  /* Implement User resolver logic here */
  watchedProducts: (parent, _, { database }) => {
    console.log("*** connections.User.watchedProducts");
    const records = database.watchedProducts.filter(
      (record) => record[0] === parent.id,
    );

    return records.map((record) => {
      const productId = record[1];
      return {
        id: productId,
        pId: productId,
        compositeId: {
          one: "1: " + productId,
          two: "2: " + productId,
          three: "3: " + productId,
        },
        tag: `connections.User.watchedProducts ${productId}`,
      };
    });
  },
};
