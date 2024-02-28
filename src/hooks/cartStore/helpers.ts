import { ProductProps } from "@/utils/data/products";
import { ProductCartProps } from "./useCartStore";

export const add = (products: ProductCartProps[], newProduct: ProductProps) => {
  const existingProduct = products.find((p) => newProduct.id === p.id);

  if (existingProduct) {
    return products.map((product) =>
      product.id === existingProduct.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
  }

  return [...products, { ...newProduct, quantity: 1 }];
};
