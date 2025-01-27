export interface DatabaseProduct {
  id: string;
  isbn: string;
}
const createProduct = ({ id }: { id: string }): DatabaseProduct => {
  return {
    id,
    isbn: `isbn-${id}`,
  };
};

export interface DatabaseMedia {
  id: string;
  type: "Book" | "Movie";
  title: string;
}
const createMedia = ({
  id,
  type,
}: {
  id: string;
  type: DatabaseMedia["type"];
}): DatabaseMedia => {
  return {
    id,
    type,
    title: `${type}-${id}`,
  };
};

export const database: {
  products: Record<string, DatabaseProduct>;
  media: Record<string, DatabaseMedia>;
} = {
  products: {
    "p:1": createProduct({ id: "p:1" }),
    "p:2": createProduct({ id: "p:2" }),
    "p:3": createProduct({ id: "p:3" }),
    "p:4": createProduct({ id: "p:4" }),
    "p:5": createProduct({ id: "p:5" }),
  },
  media: {
    "m:1": createMedia({ id: "m:1", type: "Book" }),
    "m:2": createMedia({ id: "m:2", type: "Movie" }),
    "m:3": createMedia({ id: "m:3", type: "Movie" }),
  },
};
