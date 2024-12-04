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
  name: async (parent, _arg, _ctx) => {
    console.log("*** users.User.name", parent);
    return {
      first: `FirstName${parent.id}`,
      last: `LastName${parent.id}`,
    };
  },
  title: async (parent, _arg, _ctx) => {
    console.log("*** users.User.title", parent);
    return "MR" as const;
  },
  firstName: async (parent, _arg, _ctx) => {
    console.log("*** users.User.firstName", parent);
    return `FirstName${parent.id}`;
  },
  lastName: async (parent, _arg, _ctx) => {
    console.log("*** users.User.lastName", parent);
    return `LastName${parent.id}`;
  },
  birthYear: async (parent, _arg, _ctx) => {
    console.log("*** users.User.birthYear", parent);
    return 1985;
  },
};
