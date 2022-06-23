import { useCallback, useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../models/Product";
import { ProductService } from "../services";
export interface IProductDetailsState {
  product: Product | null;
  isLoading: boolean;
  error: string | null;
}
type ProductParams = {
  slugName: string;
};
export const ProductDetailsContext = createContext({} as IProductDetailsState);
export const ProductDetailsProvider = ({ children }: any) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setisLoading] = useState(true);
  const { slugName } = useParams<ProductParams>();
  const [error, setError] = useState(null);

  const fetchProduct = useCallback(async () => {
    try {
      const product = await ProductService.getProductBySlugName(slugName);
      setProduct(product ? product : null);
    } catch (error: any) {
      setProduct(null);
      setError(error.message || "Something went wrong");
      console.error(error);
    } finally {
      setisLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    <ProductDetailsContext.Provider
      value={{
        product,
        isLoading,
        error: null,
      }}
    >
      {children}
    </ProductDetailsContext.Provider>
  );
};

export const useProductDetails = () => {
  const context = useContext(ProductDetailsContext);
  if (!context) {
    throw new Error(
      "useProductDetails must be used within a ProductDetailsProvider"
    );
  }
  return context;
};
