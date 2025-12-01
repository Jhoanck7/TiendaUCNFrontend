import { ApiResponse } from "@/models/generics";
import { BaseApiService } from "./base-api-service";
import {
  AddItemToCartRequest,
  CartResponse,
  UpdateCartItemRequest,
} from "@/models/responses"; // Asegúrate que la ruta a tus modelos sea correcta

export class CartService extends BaseApiService {
  constructor() {
    // El prefijo de la URL para todos los endpoints del carrito es '/cart'
    super("/cart");
  }

  /**
   * Obtiene el contenido del carrito de compras del usuario actual.
   * Corresponde a: GET /cart
   * @returns Una promesa con los datos del carrito.
   */
  getCart() {
    return this.httpClient.get<ApiResponse<CartResponse>>(`${this.baseURL}`);
  }

  /**
   * Añade un nuevo item al carrito de compras.
   * Corresponde a: POST /cart/items
   * @param data - Los datos del item a añadir (productId y quantity).
   * @returns Una promesa con la respuesta del carrito actualizado.
   */
  addItemToCart(data: AddItemToCartRequest) {
    return this.httpClient.post<ApiResponse<CartResponse>>(
      `${this.baseURL}/items`,
      data
    );
  }

  /**
   * Actualiza la cantidad de un item existente en el carrito.
   * Corresponde a: PUT /cart/items/{itemId}
   * @param itemId - El ID del item en el carrito a actualizar.
   * @param data - Los datos para actualizar (quantity).
   * @returns Una promesa con la respuesta del carrito actualizado.
   */
  updateCartItem(itemId: number, data: UpdateCartItemRequest) {
    return this.httpClient.put<ApiResponse<CartResponse>>(
      `${this.baseURL}/items/${itemId}`,
      data
    );
  }

  /**
   * Elimina un item del carrito de compras.
   * Corresponde a: DELETE /cart/items/{itemId}
   * @param itemId - El ID del item del carrito a eliminar.
   * @returns Una promesa con la respuesta del carrito actualizado.
   */
  removeItemFromCart(itemId: number) {
    return this.httpClient.delete<ApiResponse<CartResponse>>(
      `${this.baseURL}/items/${itemId}`
    );
  }
}

export const cartService = new CartService();
