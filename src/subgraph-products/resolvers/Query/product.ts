import type { QueryResolvers } from "./../../types.generated";
export const product: NonNullable<QueryResolvers["product"]> = async (
  _parent,
  { id },
  { database },
) => {
  console.log("*** products: Query.product ", id);
  return database.products[id];
};
