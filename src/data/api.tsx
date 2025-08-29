import axios from 'axios';

const apiUrl = 'https://dummyjson.com/products';

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  thumbnail: string;
};

export type Category = {
  name: string;
  image: string;
  numProducts: number;
  totalStock: number;
};

type ProductsResponse = {
  products: Product[];
};

export const getProducts = async (): Promise<Product[]> => {
  const promise = axios
    .get<ProductsResponse>(`${apiUrl}`)
    .then(response => {
      return response.data.products;
    })
    .catch(error => {
      throw error;
    });

  return promise;
};
