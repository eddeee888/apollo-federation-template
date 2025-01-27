import type { QueryResolvers } from "./../../types.generated";
export const media: NonNullable<QueryResolvers["media"]> = async (
  _parent,
  { id },
  { database },
) => {
  console.log("*** products: Query.media ", id);
  const mediaItem = database.media[id];
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
};
