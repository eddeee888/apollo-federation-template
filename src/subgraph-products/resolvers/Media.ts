import type { MediaResolvers } from "./../types.generated";
export const Media: MediaResolvers = {
  __resolveReference: (ref: any, { database }: any) => {
    console.log("--- products.Media.__resolveReference: ", ref);

    const mediaItem = database.media[ref.id];
    if (!mediaItem) {
      return null;
    }

    if (mediaItem.type === "Book") {
      return {
        __typename: "Book",
        id: mediaItem.id,
        title: mediaItem.title,
      };
    }

    return {
      __typename: "Movie",
      id: mediaItem.id,
      name: mediaItem.title,
    };
  },
} as any; // FIXME: overriding to allow __resolveReference
