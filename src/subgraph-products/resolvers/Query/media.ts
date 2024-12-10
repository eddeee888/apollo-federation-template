import type { QueryResolvers } from "./../../types.generated";
export const media: NonNullable<QueryResolvers["media"]> = async (
  _parent,
  { id },
  { database },
) => {
  console.log("*** product.Query.media", { id });
  const item = database.media[id];

  if (!item) {
    return null;
  }

  return item.type === "Book"
    ? {
        __typename: "Book",
        id,
        name: item.name,
        isbn: item.serialIdentifier,
      }
    : {
        __typename: "Magazine",
        id,
        name: item.name,
        issue: item.serialIdentifier,
      };
};
