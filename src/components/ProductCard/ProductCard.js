import "./ProductCard.css";
import ProductImage from "../ProductImage/ProductImage";
import ProductInfo from "../ProductInfo/ProductInfo";
function ProductCard() {
  return (
    <div className="product-card">
      <ProductImage />
      <ProductInfo />
    </div>
  );
}

export default ProductCard;
