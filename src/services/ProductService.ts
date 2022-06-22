import { challengeApi } from "../apis";
import { Product } from "../models";
import { matchSorter } from "match-sorter";
interface ProductParams {
  search?: string;
}
const getProducts = async ({ search }: ProductParams) => {
  const response = await challengeApi.get<Product[]>("/products.json");
  const data = response.data;

  if (search) {
    const filtered = matchSorter(data, search, { keys: ["name", "id"] });
    return filtered;
  }

  return response.data;
};

const getProductById = async (id: string) => {
  const response = await challengeApi.get<Product>(`/products/${id}.json`);
  return response.data;
};

export const ProductService = {
  getProducts,
  getProductById,
};
