import { ApiResponse } from "@/models/generics";
import { AxiosRequestConfig } from "axios";
import { PaginationQueryParams } from "@/models/requests";
import { BaseApiService } from "./base-api-service";
import {
  ProductDetailForCustomerResponse,
  //ProductListForAdminResponse,
  ProductListForCustomerResponse,
} from "@/models/responses";

export class ProductService extends BaseApiService {
  constructor() {
    super("");
  }
  /**
   * Method for obtaining products for the customer
   * @param params The pagination parameter is sent
   * @returns data of product from the backend
   */
  getProductsForCustomer(params?: PaginationQueryParams) {
    return this.httpClient.get<ApiResponse<ProductListForCustomerResponse>>(
      `${this.baseURL}/products`,
      { params } as AxiosRequestConfig
    );
  }
  /**
   * Method for obtaining products details for the customer
   * @param id of product
   * @returns data of product detail fromo the backend
   */
  async getProductDetail(id: string): Promise<ProductDetailForCustomerResponse> {
    const response = await this.httpClient.get<ProductDetailForCustomerResponse>(
      `/products/${id}`
    );
    return response.data;
  }
}

export const productService = new ProductService();
