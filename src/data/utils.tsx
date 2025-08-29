import { useQueryClient } from '@tanstack/react-query';
import { Category, Product } from '../data/api';

export const useCategoriesFromCache = (): Category[] | undefined => {
  const queryClient = useQueryClient();
  const products = queryClient.getQueryData<Product[]>(['Products']);

  if (products === undefined) {
    return undefined;
  }

  //group products by category to show the categories
  const grouped = products.reduce<Record<string, Category>>((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = {
        name: product.category,
        image: product.thumbnail,
        numProducts: 0,
        totalStock: product.stock,
      };
    }
    acc[product.category].numProducts++;
    acc[product.category].totalStock += product.stock;
    return acc;
  }, {});
  return Object.values(grouped);
};

export const useProductsByCategory = (
  categoryName: string,
): Product[] | undefined => {
  const queryClient = useQueryClient();
  const products = queryClient.getQueryData<Product[]>(['Products']);

  if (products === undefined) {
    return undefined;
  }

  //get products by category
  const productsByCategory = products.filter(
    product => product.category === categoryName,
  );
  return productsByCategory;
};
