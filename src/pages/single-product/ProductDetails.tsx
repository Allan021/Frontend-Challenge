import { NavBarLayout } from "../../components/layouts";
import { ProductDetailsProvider } from "../../contexts/";
import { ProductDetailsView } from "./ProductDetailsView";

const ProductDetails = () => {
  return (
    <ProductDetailsProvider>
      <ProductDetailsView />
    </ProductDetailsProvider>
  );
};

export default ProductDetails;
