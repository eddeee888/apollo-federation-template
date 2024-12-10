import type { MediaResolvers } from "./../types.generated";
export const Media: MediaResolvers = {
  __resolveReference: (ref) => {
    console.log("--- connections.Media.__resolveReference", ref);
    return { id: ref.id, source: "ref" };
  },
  ratings: async (parent, _arg, { database }) => {
    console.log("*** connections.Media.ratings", parent);
    return database.mediaRatings[parent.id];
  },
};
