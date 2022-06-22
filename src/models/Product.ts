export interface Product {
  title: string;
  id: number;
  name: string;
  price: number;
  discount?: number;
  image: string;
  rating: number;
  unit?: string;
  imgGroup?: string[];
}
