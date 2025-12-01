import { axiosInstance } from "@/providers";

export type Product = {
  id: string | number;
  name: string;
  price: number;
  description?: string;
  // agrega más campos según tu backend
};

export const getProducts = () => {
  return axiosInstance.get<Product[]>('/products');
};

export const getProductById = (id: string) => {
  return axiosInstance.get<Product>(`/products/${id}`);
};
