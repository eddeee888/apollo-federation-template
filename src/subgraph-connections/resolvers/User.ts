import type { UserResolvers } from "./../types.generated";
export const User: UserResolvers = {
  __resolveReference: (ref: any, { database }) => {
    console.log("--- connections.User.__resolveReference", ref);
    return { _id: ref.id, fromRef: true };
  },
  id: (parent) => {
    console.log("*** connections.User.id", parent);
    return parent._id;
  },
  watchedProducts: (parent, _, { database }) => {
    console.log("*** connections.User.watchedProducts", parent);
    const records = database.watchedProducts.filter(
      (record) => record[0] === parent._id
    );

    return records.map((record) => {
      const productId = record[1];
      return {
        id: productId,
        tag: `connections.User.watchedProducts ${productId}`,
      };
    });
  },
  friends: (parent, _, { database }) => {
    console.log("*** connections.User.friends", parent);
    return database.friends[parent._id].map((id) => ({
      _id: id,
      fromResolver: true,
    }));
  },
};
