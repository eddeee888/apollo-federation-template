import type { MediaResolvers } from "./../types.generated";
export const Media: MediaResolvers = {
  __resolveReference: (ref: any, { database }: any) => {
    console.log("--- products.Media.__resolveReference: ", ref);
    return database.media[ref.id];
  },
  __resolveType: (parent: any) => {
    console.log("*** products.Media.__resolveType: ", parent);
    return parent.type;
  },
} as any;
