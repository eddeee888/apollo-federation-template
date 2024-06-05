import { DatabaseProduct } from "./database";

export type ProductMapper = DatabaseProduct;
export type ProductStageMapper = {
  productId: string;
  isBeta: boolean;
};
