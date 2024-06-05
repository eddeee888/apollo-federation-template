import type { ProductResolvers } from "./../types.generated";
export const Product: ProductResolvers = {
  __resolveReference: (parent) => {
    console.log("*** users.Product.__resolveReference", JSON.stringify(parent));
    return parent as any;
  },
  // name: (parent: any) => {
  //   console.log("*** users.Product.name", JSON.stringify(parent));
  //   return "users.Product.name: " + parent._base;
  // },
  // alternateName: (parent: any) => {
  //   console.log("*** users.Product.alternateName", JSON.stringify(parent));
  //   return "users.Product.alternateName: " + parent._base;
  // },
  productNameBeta: (parent) => {
    const result = JSON.stringify(parent);
    console.log("*** users.Product.productNameBeta: ", result);
    return "users.Product.productNameBeta: " + result;
  },
  // userProductName: (parent) => {
  //   const result = JSON.stringify(parent);
  //   console.log("*** users.Product.userProductName: ", result);
  //   return "users.Product.userProductName: " + result;
  //   return "...";
  // },
};
