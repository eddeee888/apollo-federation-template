import type { QueryResolvers } from "./../../types.generated";
export const product: NonNullable<QueryResolvers["product"]> = async (
  _parent,
  { id },
  { database }
) => {
  return database.products[id];
};
