import type { QueryResolvers } from "./../../types.generated";
export const user: NonNullable<QueryResolvers["user"]> = async (
  _parent,
  { id },
  { database },
) => {
  return database.users[id];
};
