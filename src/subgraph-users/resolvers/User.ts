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
};
