import { useParams } from "react-router-dom";

type ProductParams = {
  id: string;
};
const ProductPage = () => {
  const { id } = useParams<ProductParams>();
  return (
    <div>
      <h1>Product Page {id}</h1>
    </div>
  );
};

export default ProductPage;
