/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Product } from "./resolvers/Product";
import { me as Query_me } from "./resolvers/Query/me";
import { User } from "./resolvers/User";
export const resolvers: Resolvers = {
  Query: { me: Query_me },

  Product: Product,
  User: User,
};
