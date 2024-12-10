export interface DatabaseProduct {
  _id: string;
  isbn: string;
}
const createProduct = ({ _id }: { _id: string }): DatabaseProduct => {
  return {
    _id,
    isbn: `isbn-${_id}`,
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
    "p:1": createProduct({ _id: "p:1" }),
    "p:2": createProduct({ _id: "p:2" }),
    "p:3": createProduct({ _id: "p:3" }),
    "p:4": createProduct({ _id: "p:4" }),
    "p:5": createProduct({ _id: "p:5" }),
  },
  media: {
    "m:1": {
      id: "m:1",
      type: "Book",
      name: "Harry Potter - The Philosopher's Stone",
      serialIdentifier: "s:1",
    },
    "m:2": {
      id: "m:2",
      type: "Magazine",
      name: "Vogue",
      serialIdentifier: "s:1",
    },
    "m:3": {
      id: "m:3",
      type: "Book",
      name: "Harry Potter - The Chamber of Secrets",
      serialIdentifier: "s:2",
    },
  },
};
