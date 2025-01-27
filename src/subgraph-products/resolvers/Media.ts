import type { MediaResolvers } from "./../types.generated";
export const Media: MediaResolvers = {
  __resolveReference: (ref: any, { database }: any) => {
    console.log("--- products.Media.__resolveReference: ", ref);
    return database.media[ref.id];
  },
  __resolveType: (media: any) => {
    return media.type;
  },
} as any;
