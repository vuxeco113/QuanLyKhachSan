import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OverviewScreen from '../screens/OverviewScreen';
import UploadScreen from '../screens/RoomMapScreen';
import BookingScreen from '../screens/BookingScreen';
import MoreScreen from '../screens/MoreScreen';
import { Text } from 'react-native';
import React from 'react';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#3498db',
        tabBarInactiveTintColor: '#666',
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
        },
      }}
    >
      <Tab.Screen 
        name='Tổng quan'
        component={OverviewScreen} 
        options={{
          tabBarLabel: 'Tổng quan1',
          tabBarIcon: ({ color }: { color: string }) => (
            <Text style={{ color }}>TQ</Text>
          ),
        }}
      />
      <Tab.Screen 
        name="Sơ đồ phòng" 
        component={UploadScreen} 
        options={{
          tabBarLabel: 'Sơ đồ phòng',
          tabBarIcon: ({ color }: { color: string }) => (
            <Text style={{ color }}>SĐ</Text>
          ),
        }}
      />
      <Tab.Screen 
        name="Đặt phòng" 
        component={BookingScreen} 
        options={{
          tabBarLabel: 'Đặt phòng',
          tabBarIcon: ({ color }: { color: string }) => (
            <Text style={{ color }}>ĐP</Text>
          ),
        }}
      />
      <Tab.Screen 
        name="Nhiều hơn" 
        component={MoreScreen} 
        options={{
          tabBarLabel: 'Nhiều hơn',
          tabBarIcon: ({ color }: { color: string }) => (
            <Text style={{ color }}>+</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;