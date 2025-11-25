import { api } from "@/lib/axios";

export type Product = {
  id: string | number;
  name: string;
  price: number;
  description?: string;
  // agrega más campos según tu backend
};

export const getProducts = () => {
  return api.get<Product[]>("/products");
};

export const getProductById = (id: string) => {
  return api.get<Product>(`/products/${id}`);
};
