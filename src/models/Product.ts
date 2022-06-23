export interface Product {
  identifier: string;
  title: string;
  id: string;
  name: string;
  price: number;
  discount?: number;
  image: string;
  rating: number;
  imgGroup: string[];
  specification: string[];
  createdAt: string;
  updatedAt: string;
  brand?: string;
  slugName: string;
}
