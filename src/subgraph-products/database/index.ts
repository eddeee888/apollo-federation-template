interface DatabaseProduct {
  id: string;
  name: string;
}
const createProduct = ({ id }: { id: string }): DatabaseProduct => {
  return {
    id,
    name: `product-name-${id}`,
  };
};

export const database: { products: Record<string, DatabaseProduct> } = {
  products: {
    "1": createProduct({ id: "1" }),
    "2": createProduct({ id: "2" }),
    "3": createProduct({ id: "3" }),
    "4": createProduct({ id: "4" }),
    "5": createProduct({ id: "5" }),
  },
};
