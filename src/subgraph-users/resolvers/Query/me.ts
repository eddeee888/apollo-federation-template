import type { QueryResolvers } from "./../../types.generated";
export const me: NonNullable<QueryResolvers["me"]> = async (
  _parent,
  _arg,
  { database },
) => {
  console.log("*** users.Query.me");
  return database.users["u:1"];
};
