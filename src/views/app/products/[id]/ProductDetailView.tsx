"use client";

import { ProductDetailForCustomerResponse } from "@/models/responses/product";

export default function ProductDetailView({ product }: { product: ProductDetailForCustomerResponse }) {
  const mainImage =
    product.imageUrls?.[0] ?? "https://placehold.co/600x400?text=Sin+Imagen";

  return (
    <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-10">
      <div className="w-full md:w-1/2">
        <img
          src={mainImage}
          alt={product.title}
          className="w-full rounded-xl shadow-md object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-2xl font-semibold">${product.finalPrice}</p>
        <p className="text-sm text-gray-500">Categoría: {product.categoryName}</p>
        <p className="text-sm text-gray-500">Marca: {product.brandName}</p>

        <div>
          <h2 className="text-lg font-semibold mb-1">Descripción</h2>
          <p>{product.description}</p>
        </div>

        <button
          onClick={() => alert("Agregado al carrito")}
          className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition"
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}
