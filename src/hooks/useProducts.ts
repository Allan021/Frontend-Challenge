import { useState } from "react";
import { SmallProduct } from "../models";

export const useProducts = () => {
  const [products, setProducts] = useState<SmallProduct[]>([]);
};
