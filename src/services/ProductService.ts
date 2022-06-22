import { challengeApi } from "../apis";
import { SmallProduct } from "../models";
import { matchSorter } from "match-sorter";
interface ProductParams {
  search?: string;
}
const getProducts = async ({ search }: ProductParams) => {
  const response = await challengeApi.get<SmallProduct[]>("/products.json");
  const data = response.data;

  if (search) {
    const filtered = matchSorter(data, search, { keys: ["name", "id"] });
    return filtered;
  }

  return response.data;
};

export const ProductService = {
  getProducts,
};
