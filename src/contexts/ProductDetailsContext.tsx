import { useCallback } from "react";
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
  id: string;
};
export const ProductDetailsContext = createContext({} as IProductDetailsState);
export const ProductDetailsProvider = ({ children }: any) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setisLoading] = useState(true);
  const { id } = useParams<ProductParams>();
  const [error, setError] = useState(null);

  const fetchProduct = useCallback(async () => {
    try {
      const product = await ProductService.getProductById(id);
      setProduct(product);
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
