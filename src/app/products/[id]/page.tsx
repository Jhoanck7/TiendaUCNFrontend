"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { productService } from "@/services/product-service";
import { ProductDetailForCustomerResponse } from "@/models/responses/product";

export default function ProductDetailPage() {
  const { id } = useParams(); // /products/[id]
  const [product, setProduct] = useState<ProductDetailForCustomerResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    productService
      .getProductDetail(id as string)
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.error("Error cargando producto", err);
        setError("Producto no encontrado");
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{product.title}</h1>

      <div style={{ display: "flex", gap: "2rem" }}>
        <div>
          {product.imageUrls?.length > 0 ? (
            <img
              src={product.imageUrls[0]}
              alt={product.title}
              width={300}
              style={{ borderRadius: 8 }}
            />
          ) : (
            <p>Sin imágenes</p>
          )}
        </div>

        <div>
          <p><strong>Precio:</strong> ${product.price}</p>
          <p><strong>Descuento:</strong> {product.discount}%</p>
          <p><strong>Precio Final:</strong> ${product.finalPrice}</p>
          <p><strong>Categoría:</strong> {product.categoryName}</p>
          <p><strong>Marca:</strong> {product.brandName}</p>
          <p style={{ maxWidth: 400 }}>
            <strong>Descripción:</strong> {product.description}
          </p>

          <button
            style={{
              marginTop: "1rem",
              padding: "10px 20px",
              background: "#000",
              color: "white",
              borderRadius: 6,
            }}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
