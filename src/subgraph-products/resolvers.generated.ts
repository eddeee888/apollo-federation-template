/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Product } from "./resolvers/Product";
import { product as Query_product } from "./resolvers/Query/product";
import { User } from "./resolvers/User";
export const resolvers: Resolvers = {
  Query: { product: Query_product },

  Product: Product,
  User: User,
};
