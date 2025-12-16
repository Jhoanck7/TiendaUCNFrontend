import { productService } from "@/services/product-service";
import ProductDetailView from "@/views/app/products/[id]/ProductDetailView";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await productService.getProductDetail(id);

  return <ProductDetailView product={product} />;
}
