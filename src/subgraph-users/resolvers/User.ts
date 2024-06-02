import type { UserResolvers } from "./../types.generated";
export const User: UserResolvers = {
  __resolveReference: (parent, { database }) => {
    console.log("*** users.User.__resolveReference", parent);
    return database.users[parent.id.toString()];
  },
  favouriteProducts: async ({ favouriteProductIds }, _arg, _ctx) => {
    return favouriteProductIds.map((id) => ({
      id,
    })) as any;
  },
  favouriteProducts_AlternateName: async (
    { favouriteProductIds },
    _arg,
    _ctx,
  ) => {
    return favouriteProductIds.map((id) => ({
      id,
      alternateName: "users.User.favouriteProducts_AlternateName",
    })) as any;
  },
  favouriteProducts_Name: async ({ favouriteProductIds }, _arg, _ctx) => {
    return favouriteProductIds.map((id) => ({
      id,
      name: "users.User.favouriteProducts_Name",
    })) as any;
  },
  favouriteProducts_Both: async ({ favouriteProductIds }, _arg, _ctx) => {
    return favouriteProductIds.map((id) => ({
      id,
      name: "users.User.favouriteProducts_Both",
      alternateName: "users.User.favouriteProducts_Both",
    })) as any;
  },
};
