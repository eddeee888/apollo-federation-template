import type { UserResolvers } from "./../types.generated";
export const User: UserResolvers = {
  /* Implement User resolver logic here */
  watchedProducts: (parent, _, { database }) => {
    console.log("*** connections.User.watchedProducts");
    const records = database.watchedProducts.filter(
      (record) => record[0] === parent.id,
    );

    return records.map((record) => {
      return { id: record[1], tag: "connections.User.watchedProducts" };
    });
  },
};
