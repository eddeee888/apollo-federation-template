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

export const database: {
  products: Record<string, DatabaseProduct>;
} = {
  products: {
    "p:1": createProduct({ id: "p:1" }),
    "p:2": createProduct({ id: "p:2" }),
    "p:3": createProduct({ id: "p:3" }),
    "p:4": createProduct({ id: "p:4" }),
    "p:5": createProduct({ id: "p:5" }),
  },
};
