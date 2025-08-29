import { NavigationProp, Route } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/categoriesScreen';
import ProductsScreen from '../screens/productsScreen';

export enum ROUTES {
  CATEGORIES = 'CATEGORIES',
  PRODUCTS = 'PRODUCTS',
}

export type RootStackParamList = {
  [ROUTES.CATEGORIES]: undefined;
  [ROUTES.PRODUCTS]: { categoryName: string };
};

export type NavigationProps = NavigationProp<RootStackParamList>;
export type RouteProps<T extends keyof RootStackParamList> = Route<
  T,
  RootStackParamList[T]
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.CATEGORIES}
        component={CategoriesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.PRODUCTS}
        component={ProductsScreen}
        //for show only back button 
        options={{
            headerTitle: '',          
            headerTransparent: true,  
          }}
      />
    </Stack.Navigator>
  );
};
