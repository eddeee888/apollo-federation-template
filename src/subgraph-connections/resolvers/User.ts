import type { UserResolvers } from "./../types.generated";
export const User: UserResolvers = {
  __resolveReference: (ref: any, { database }) => {
    console.log("--- connections.User.__resolveReference", ref);
    const { id, ...rest } = ref;
    return { ...rest, _id: id, source: "ref" };
  },
  id: (parent: any) => {
    console.log("*** connections.User.id", parent);
    return parent._id;
  },
  watchedProducts: (parent: any, _, { database }) => {
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
  friends: (parent: any, _, { database }) => {
    console.log("*** connections.User.friends", parent);
    return database.friends[parent._id].map((id) => ({
      _id: id,
      source: "resolver",
    }));
  },
  fullName: async (parent: any, _arg, _ctx) => {
    console.log("*** connections.User.fullName", parent);
    return `${parent.firstName} ${parent.lastName}`;
  },
  fullNameWithTitle: async (parent: any, _arg, _ctx) => {
    console.log("*** connections.User.fullNameWithTitle", parent);
    return `${parent.title} ${parent.firstName} ${parent.lastName}`;
  },
  fullNameUsingPersonName: async (parent: any, _arg, _ctx) => {
    console.log("*** connections.User.fullNameUsingPersonName", parent);
    return `${parent.name.first} ${parent.name.last}`;
  },
  age: (parent) => {
    console.log("*** connections.User.age", parent);
    return 39;
  },
  title: async (parent, _arg, _ctx) => {
    console.log("*** connections.User.title", parent);
    return "MS" as const;
  },
  name: async (parent: any, _arg, _ctx) => {
    console.log("*** connections.User.name", parent);
    return {
      first: `First:connections:${parent._id}`,
      last: `Last:connections:${parent._id}`,
    };
  },
};
