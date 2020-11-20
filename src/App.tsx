import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoutes from './Routes';

import AppProvider from './hooks';
// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <AppProvider>
        <View style={{ backgroundColor: '#312e38', flex: 1 }}>
          <AuthRoutes />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
