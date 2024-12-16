interface ProductCardProps {
  productName: string;
  productPrice: number;
  productCategory: string;
  productDescription: string;
}
const ProductCard: React.FC<ProductCardProps> = ({
  productName,
  productPrice,
  productCategory,
  productDescription,
}) => {
  return (
    <div>
      <h1>ProductCard</h1>
      <p>Product Name: {productName ?? "iPhone16"}</p>
      <p>Product Price: {productPrice ?? "1000"} </p>
      <p>Category: {productCategory ?? "Electronics"}</p>
      <p>Description: {productDescription ?? "iPhone16"}</p>
    </div>
  );
};

export default ProductCard;
