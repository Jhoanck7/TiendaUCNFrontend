"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { productService } from "@/services/product-service";
import { ProductForCustomerResponse } from "@/models/responses/product";

export default function ProductsListView() {
  const [data, setData] = useState<ProductForCustomerResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    productService
      .getProductsForCustomer()
      .then((r) => setData(r.data?.data?.products ?? []))
      .catch((e) => {
        console.error(e);
        setError("Error al cargar productos");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(3, 1fr)" }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} style={{ padding: 16, background: "#f3f3f3", borderRadius: 8, height: 140 }} />
        ))}
      </div>
    );

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>Productos</h1>

      <div style={{ marginTop: 20, display: "grid", gap: 20, gridTemplateColumns: "repeat(3, 1fr)" }}>
        {data.length === 0 && <p>No hay productos disponibles.</p>}
        {data.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16 }}>
            <h3>{p.title}</h3>
            <p>Precio: {p.price} CLP</p>
            <Link href={`/products/${p.id}`}>
              <button style={{ marginTop: 10 }}>Ver más</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
