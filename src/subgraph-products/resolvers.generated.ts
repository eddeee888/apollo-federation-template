/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { product as Query_product } from "./resolvers/Query/product";
import { Product } from "./resolvers/Product";
export const resolvers: Resolvers = {
  Query: { product: Query_product },

  Product: Product,
};
