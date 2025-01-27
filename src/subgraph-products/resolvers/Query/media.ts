import type { QueryResolvers } from "./../../types.generated";
export const media: NonNullable<QueryResolvers["media"]> = async (
  _parent,
  { id },
  { database },
) => {
  console.log("*** products: Query.media ", id);
  return database.media[id];
};
