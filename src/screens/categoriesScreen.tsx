import { View, FlatList, StyleSheet } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import Spinner from 'react-native-loading-spinner-overlay';
import { useNavigation } from '@react-navigation/native';

import { Category, getProducts } from '../data/api';
import { useCategoriesFromCache } from '../data/utils';
import { NavigationProps, ROUTES } from '../navigation/appNavigator';
import { Text } from '../components/text';
import Card from '../components/card';
import { spacing } from '../theme/spacing';

const CategoriesScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  const { isLoading, isError } = useQuery({
    queryKey: ['Products'],
    queryFn: () => getProducts(),
  });

  const categories = useCategoriesFromCache();

  const onCategoryPress = (category: Category) =>
    navigation.navigate(ROUTES.PRODUCTS, { categoryName: category.name });

  const renderItem = ({ item }: { item: Category }) => (
    <Card
      onPress={() => onCategoryPress(item)}
      key={item.name}
      image={item.image}
    >
      <View style={styles.cardContainer}>
        <Text variant="subTitle">{item.name}</Text>
        <Text variant="body">{item.numProducts} products</Text>
        <Text variant="body">{item.totalStock} items in stock</Text>
      </View>
    </Card>
  );

  if (isLoading)
    return (
      <View style={styles.loadingContainer}>
        <Text variant="header">Welcome to our products application</Text>
        <Spinner visible={true} />
      </View>
    );

  if (isError || categories === undefined)
    return (
      <Text variant="header">
        There is an error while fetching the categories
      </Text>
    );

  return (
    <View style={styles.container}>
      <Text variant="title">Categories:</Text>
      <FlatList
        data={categories}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md,
  },
  cardContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
});

export default CategoriesScreen;
