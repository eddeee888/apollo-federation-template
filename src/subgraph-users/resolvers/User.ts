import type { UserResolvers } from "./../types.generated";
export const User: UserResolvers = {
  __resolveReference: ({ id }, { database }) => {
    return database.users[id.toString()];
  },
};
