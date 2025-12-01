export interface ProductForCustomerResponse {
    id: number;
    title: string;
    description: string;
    mainImageURL: string;
    price: string;
    discount: number;
}
export interface ProductListForCustomerResponse {
  products: ProductForCustomerResponse[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
}


export interface ProductDetailForCustomerResponse {
  id: number;
  title: string;
  description: string;
  price: number;
  discount: number;
  finalPrice: number;
  categoryName: string;
  brandName: string;
  imageUrls: string[];
}