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
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [params.id]);

  if (loading) return <p>Cargando producto...</p>;
  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Precio: {product.price}</p>

      <button
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
