import { useQuery } from "@tanstack/react-query";

export interface Product {
  id: number;
  title: string;
  price: number;
  finalPrice: number;
  mainImageUrl: string;
  categoryName: string;
}

export function useProductsQuery(page: number, search: string) {
  return useQuery<Product[]>({
    queryKey: ["products", page, search],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5121/api/products?page=${page}&search=${search}`
      );

      if (!res.ok) throw new Error("Error fetching products");

      return res.json();
    },
  });
}
