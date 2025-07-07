import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { SCREENS } from './screenNames.ts';
import HomeScreen  from '../screens/HomeScreen.tsx';
import SearchScreen  from '../screens/SearchScreen.tsx';
import ProfileScreen  from '../screens/ProfileScreen.tsx';
import OverviewScreen from '../screens/OverviewScreen.tsx';
export type BottomTabParamList = {
  [SCREENS.HOME]: undefined;
  [SCREENS.SEARCH]: undefined;
  [SCREENS.PROFILE]: undefined;
  [SCREENS.MORESCREEN]:undefined;
  [SCREENS.REGISTER]:undefined;
  [SCREENS.OVERVIEWSCREEN]:undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      }}
    >
      <Tab.Screen name={SCREENS.OVERVIEWSCREEN} component={OverviewScreen} />
      <Tab.Screen name={SCREENS.HOME} component={HomeScreen} />
      <Tab.Screen name={SCREENS.SEARCH} component={SearchScreen} />
      <Tab.Screen name={SCREENS.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;