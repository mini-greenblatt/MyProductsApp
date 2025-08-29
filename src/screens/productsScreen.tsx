import { FlatList, StyleSheet, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { RouteProps, ROUTES } from '../navigation/appNavigator';
import { useProductsByCategory } from '../data/utils';
import Card from '../components/card';
import { Text } from '../components/text';
import { spacing } from '../theme/spacing';

const ProductsScreen = () => {
  const {
    params: { categoryName },
  } = useRoute<RouteProps<ROUTES.PRODUCTS>>();

  const products = useProductsByCategory(categoryName);

  return (
    <View style={styles.container}>
      <Text variant="title">The products in {categoryName} category:</Text>
      {products === undefined || products.length === 0 ? (
        <Text variant="body">No products found</Text>
      ) : (
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <Card key={item.id} image={item.thumbnail}>
              <View style={styles.cardContainer}>
                <Text variant="subTitle">{item.title} </Text>
                <Text variant="description">{item.description} </Text>
                <Text variant="body">price: {item.price} ₪</Text>
                <Text variant="body">available in stock: {item.stock}</Text>
              </View>
            </Card>
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    paddingVertical: spacing.xl,
    gap: spacing.sm,
  },
  cardContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
});

export default ProductsScreen;
