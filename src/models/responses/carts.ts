// src/models/cart.ts

/**
 * Representa un item dentro del carrito de compras.
 */
export interface CartItem {
  id: number; // ID del item en el carrito
  productId: string;
  productName: string;
  price: number;
  quantity: number;
  imageUrl?: string;
}

/**
 * Representa la respuesta del API para el carrito de compras.
 */
export interface CartResponse {
  items: CartItem[];
  total: number;
}

/**
 * DTO (Data Transfer Object) para añadir un producto al carrito.
 */
export interface AddItemToCartRequest {
  productId: string;
  quantity: number;
}

/**
 * DTO para actualizar la cantidad de un item en el carrito.
 */
export interface UpdateCartItemRequest {
  quantity: number;
}