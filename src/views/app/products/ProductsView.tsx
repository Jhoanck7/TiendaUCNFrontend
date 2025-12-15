"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useProductsQuery } from "@/hooks/useProductsQuery";
import ProductCard from "@/components/products/ProductCard";
import FilterBar from "@/components/products/FilterBar";
import ProductSkeleton from "@/components/products/ProductSkeleton";

export default function ProductsView() {
  const router = useRouter();
  const params = useSearchParams();

  const page = Number(params.get("page") ?? 1);
  const searchParam = params.get("search") ?? "";

  const [search, setSearch] = useState(searchParam);

  
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push(`/products?page=1&search=${search}`);
    }, 500);

    return () => clearTimeout(timeout);
  }, [search, router]);

  const { data, isLoading } = useProductsQuery(page, searchParam);

  return (
    <main className="products-container">
      <h1>Catálogo de Productos</h1>

      <FilterBar search={search} onSearchChange={setSearch} />

      {isLoading ? (
        <div className="grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      ) : (
        <div className="grid">
          {data?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
