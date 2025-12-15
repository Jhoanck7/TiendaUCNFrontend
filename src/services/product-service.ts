export interface Product {
  id: number;
  title: string;
  price: number;
  finalPrice: number;
  mainImageUrl: string;
  categoryName: string;
}

export interface PaginationMeta {
  totalPages: number;
  currentPage: number;
}

export async function fetchProducts(params: {
  page: number;
  search?: string;
}) {
  const query = new URLSearchParams();
  query.append("PageNumber", params.page.toString());
  query.append("PageSize", "12");

  if (params.search) {
    query.append("SearchTerm", params.search);
  }

  const res = await fetch(
    `http://localhost:5121/api/products?${query.toString()}`
  );

  if (!res.ok) {
    throw new Error("Error cargando productos");
  }

  const data = await res.json();

  return {
    items: data as Product[],
    meta: {
      totalPages: Number(res.headers.get("X-Pagination-TotalPages")),
      currentPage: Number(res.headers.get("X-Pagination-CurrentPage")),
    },
  };
}
