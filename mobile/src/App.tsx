import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppProvider from './hooks';

import Routes from './routes';
import { useAuth } from './hooks/auth';

const App: React.FC = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor={user ? '#28262e' : '#312e38'}
      />
      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
