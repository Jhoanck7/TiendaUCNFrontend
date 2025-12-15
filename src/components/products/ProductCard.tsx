import { Product } from "../../services/product-service";

export default function ProductCard({ product }: Readonly<{ product: Product }>) {
  return (
    <div className="card">
      <img src={product.mainImageUrl} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="price">${product.finalPrice}</p>
      <span>{product.categoryName}</span>
    </div>
  );
}
