import type { ProductResolvers } from "./../types.generated";
export const Product: ProductResolvers = {
  __resolveReference: async (parent: any, { database }) => {
    console.log(
      "*** products.Product.__resolveReference: ",
      JSON.stringify(parent)
    );
    return database.products[parent.id || parent.pId];
  },
  // name: async (parent, _arg, _ctx) => {
  //   console.log("*** products.Product.name: ", parent);
  //   return "products.Product.name: " + parent.isbn;
  // },
  // alternateName: async (parent, _arg, _ctx) => {
  //   console.log("*** products.Product.alternateName: ", parent);
  //   return "products.Product.alternateName: " + parent.isbn;
  // },
  productName: async (parent, _arg, _ctx) => {
    console.log("*** products.Product.productName: ", parent);
    return "products.Product.productName: " + "PRODUCT NAME";
  },
  // stage: async (parent, _arg, _ctx) => {
  //   console.log("*** products.Product.stage: ", parent);
  //   return {
  //     productId: parent.id,
  //     isBeta: parent.isBeta,
  //   };
  // },
  compositeId: async ({ id }, _arg, _ctx) => {
    return {
      one: "productCompositeId1: " + id,
      two: "productCompositeId2: " + id,
      three: "productCompositeId3: " + id,
    };
  },
  pId: async ({ id }, _arg, _ctx) => {
    return "pId: " + id;
  },
};
