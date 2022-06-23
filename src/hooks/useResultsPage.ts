import { useCallback, useEffect, useState } from "react";
import { Product } from "../models";
import { ProductService } from "../services";
import { useSearchContext } from "../contexts/SearchContext";

type View = "grid" | "list";
export const useResultsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [view, setView] = useState<View>("grid");
  const toggleView = useCallback((v: View) => {
    setView(v);
  }, []);

  const { search } = useSearchContext();
  const fetchProducts = useCallback(async () => {
    try {
      const products = await ProductService.getProducts({ search });
      setProducts(products);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [search]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, isLoading, view, toggleView };
};
