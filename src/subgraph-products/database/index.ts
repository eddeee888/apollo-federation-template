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
  type: "Book" | "Magazine";
  name: string;
  serialIdentifier: string;
}

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
    "m:1": {
      id: "m:1",
      type: "Book",
      name: "Harry Potter",
      serialIdentifier: "s:1",
    },
    "m:2": {
      id: "m:2",
      type: "Magazine",
      name: "Vogue",
      serialIdentifier: "s:1",
    },
  },
};
