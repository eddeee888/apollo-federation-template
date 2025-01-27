import type { UserResolvers } from "./../types.generated";
export const User: UserResolvers = {
  __resolveReference: (ref, { database }) => {
    console.log("--- users.User.__resolveReference", parent);
    return database.users[ref.id.toString()];
  },
  id: (parent) => {
    console.log("*** users.User.id", parent);
    return parent.id;
  },
  username: (parent) => {
    console.log("*** users.User.name", parent);
    return parent.username;
  },
  favouriteProduct: (parent) => {
    console.log("*** users.User.favouriteProduct", parent);
    if (!parent.favouriteProductId) {
      return null;
    }

    return {
      id: parent.favouriteProductId,
    };
  },
  favouriteMedia: async (parent, _arg, _ctx) => {
    console.log("*** users.User.favouriteMedia", parent);
    if (!parent.favouriteMediaId) {
      return null;
    }

    return {
      id: parent.favouriteMediaId,
    };
  },
};
