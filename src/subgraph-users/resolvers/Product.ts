import type { ProductResolvers } from "./../types.generated";
export const Product: ProductResolvers = {
  name: (parent: any) => {
    console.log("*** users.Product.name", JSON.stringify(parent));
    return "users.Product.name: " + parent.name;
  },
  alternateName: (parent: any) => {
    console.log("*** users.Product.alternateName", JSON.stringify(parent));
    return "users.Product.alternateName: " + parent.alternateName;
  },
};
