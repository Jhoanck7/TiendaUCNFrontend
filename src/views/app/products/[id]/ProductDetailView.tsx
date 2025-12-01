"use client";

import { ProductDetailForCustomerResponse } from "@/models/responses/product";

export default function ProductDetailView({ product }: { product: ProductDetailForCustomerResponse }) {
  const mainImage =
    product.imageUrls?.[0] ?? "https://placehold.co/600x400?text=Sin+Imagen";

  return (
    <div className="min-h-screen w-full bg-white py-16 flex justify-center">
      <div
        className="
        max-w-5xl w-full
        bg-gray-100
        rounded-2xl
        shadow-[0_10px_25px_-10px_rgba(0,0,0,0.15)]
        p-12
        mx-auto
        translate-x-[-180px]
        h-[500px]

      "
      >
        <div className="flex flex-col md:flex-row gap-14">
          <div className="w-full md:w-1/2">
            <img
              src={mainImage}
              alt={product.title}
              className="
                w-full
                rounded-2xl
                shadow-[0_8px_20px_-5px_rgba(0,0,0,0.25)]
                object-cover
              "
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              {product.title}
            </h1>

            <div className="flex items-center gap-4">
              <p className="text-3xl font-semibold text-gray-900">
                ${product.finalPrice}
              </p>

              {product.discount && (
                <span className="text-sm bg-red-500 text-white px-3 py-1 rounded-md font-semibold">
                  -{product.discount}%
                </span>
              )}
            </div>

            <p className="text-sm text-gray-700">
              <span className="font-semibold">Categoría:</span>{" "}
              {product.categoryName}
            </p>

            <p className="text-sm text-gray-700">
              <span className="font-semibold">Marca:</span> {product.brandName}
            </p>

            <div className="pt-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Descripción
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            <button
              onClick={() => alert("Agregado al carrito")}
              className="
                bg-blue-600
                text-white
                py-4
                px-6
                rounded-lg
                text-lg
                font-semibold
                shadow-[0_4px_10px_-2px_rgba(0,0,0,0.2)]
                hover:bg-blue-700
                active:scale-[0.98]
                transition-all
              "
            >
              Añadir al Carrito 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

