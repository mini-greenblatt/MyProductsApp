/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nManager } from 'react-native';

import { AppNavigator } from './src/navigation/appNavigator';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  const queryClient = new QueryClient();

  // Force LTR layout because all the data is in english
  I18nManager.forceRTL(false);
  I18nManager.allowRTL(false);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
