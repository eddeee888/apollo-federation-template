import type { UserResolvers } from "./../types.generated";
export const User: UserResolvers = {
  __resolveReference: (parent, { database }) => {
    console.log("*** users.User.__resolveReference", parent);
    return database.users[parent.id.toString()];
  },
};
