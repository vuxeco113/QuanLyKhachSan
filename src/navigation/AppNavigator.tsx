import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import BottomTabNavigator from './BottomTabNavigator';
import AuthStack from '../navigation/AuthStack';

const AppNavigator: React.FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user ? <BottomTabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNavigator;