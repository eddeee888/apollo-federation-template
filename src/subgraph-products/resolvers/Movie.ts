import type { MovieResolvers } from "./../types.generated";
export const Movie: MovieResolvers = {
  name: (parent) => {
    console.log("*** products.Movie.name", parent);
    return parent.title;
  },
};
