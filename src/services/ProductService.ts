import { challengeApi } from "../apis";
import { Product } from "../models";
import { matchSorter } from "match-sorter";
interface ProductParams {
  search?: string;
}
const getProducts = async ({ search }: ProductParams) => {
  const response = await challengeApi.get<Product[]>("/");
  const data = response.data;

  if (search) {
    //sorry i wasn't able to finish this part
    return matchSorter(data, search, {
      keys: ["title", "name", "id"],
    });
  }

  return data;
};

const getProductById = async (id: string) => {
  const response = await challengeApi.get<Product[]>(`/${id}`);
  const data = response.data;
  return data;
};

export const ProductService = {
  getProducts,
  getProductById,
};
