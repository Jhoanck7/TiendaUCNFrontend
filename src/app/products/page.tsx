"use client";

import { useEffect, useState } from "react";
import { getProductById, Product } from "@/services/products";
import { useCartStore } from "@/src/store/cart";

interface Props {
  params: { id: string };
}

export default function ProductDetailPage({ params }: Props) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    getProductById(params.id)
      .then((r) => setProduct(r.data))
      .catch((e) => console.error("Error cargando producto:", e))
      .finally(() => setLoading(false));
  }, [params.id]);

  if (loading) return <p>Cargando producto...</p>;
  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>{product.name}</h1>
      <p style={{ marginTop: 10 }}>Precio: {product.price} CLP</p>
      <p style={{ marginTop: 10 }}>{product.description}</p>

      <button
        style={{ marginTop: 20 }}
        onClick={() =>
          addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
          })
        }
      >
        Agregar al carrito
      </button>
    </div>
  );
}

