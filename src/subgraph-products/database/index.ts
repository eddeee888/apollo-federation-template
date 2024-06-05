export interface DatabaseProduct {
  id: string;
  isbn: string;
  isBeta: boolean;
}
const createProduct = ({
  id,
  isBeta,
}: {
  id: string;
  isBeta: boolean;
}): DatabaseProduct => {
  return {
    id,
    isbn: `isbn-${id}`,
    isBeta,
  };
};

export const database: {
  products: Record<string, DatabaseProduct>;
} = {
  products: {
    "p:1": createProduct({ id: "p:1", isBeta: true }),
    "p:2": createProduct({ id: "p:2", isBeta: false }),
    "p:3": createProduct({ id: "p:3", isBeta: true }),
    "p:4": createProduct({ id: "p:4", isBeta: false }),
    "p:5": createProduct({ id: "p:5", isBeta: true }),
  },
};
