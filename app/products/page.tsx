import ProductsListView from "@/views/app/products/ProductsListView";

export const metadata = {
  title: "Productos | Tienda UCN",
  description: "Listado de productos",
};

export default function ProductsPage() {
  // Server component: only provides metadata and renders the client view
  return <ProductsListView />;
}
