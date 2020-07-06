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
        backgroundColor={user ? '#312e38' : '#28262e'}
      />
      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
