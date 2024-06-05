import type { UserResolvers } from "./../types.generated";
export const User: UserResolvers = {
  __resolveReference: (parent, { database }) => {
    console.log("*** users.User.__resolveReference", parent);
    return database.users[parent.id.toString()];
  },
  favouriteProducts: (parent, _arg, _ctx) => {
    console.log("*** users.User.favouriteProducts", JSON.stringify(parent));
    return parent.favouriteProductIds.map((id) => ({
      id: "users.User.favouriteProducts: " + id,
      pId: id,
      compositeId: {
        one: "favouriteProducts1: " + id,
        two: "favouriteProducts2: " + id,
        three: "favouriteProducts3: " + id,
      },
    })) as any;
  },
};

// favouriteProducts_AlternateName: async (
//   { favouriteProductIds },
//   _arg,
//   _ctx,
// ) => {
//   return favouriteProductIds.map((id) => ({
//     id,
//     _base: "users.User.favouriteProducts_AlternateName_base",
//   })) as any;
// },
// favouriteProducts_Name: async ({ favouriteProductIds }, _arg, _ctx) => {
//   return favouriteProductIds.map((id) => ({
//     id,
//     _base: "users.User.favouriteProducts_Name_base",
//   })) as any;
// },
// favouriteProducts_Both: async ({ favouriteProductIds }, _arg, _ctx) => {
//   return favouriteProductIds.map((id) => ({
//     id,
//     _base: "users.User.favouriteProducts_Both_base",
//   })) as any;
// },
