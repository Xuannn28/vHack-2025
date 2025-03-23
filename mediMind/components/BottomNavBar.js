import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Dashboard from './Dashboard'; 

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

const BottomNavBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Dashboard') {
              iconName = 'grid';
            } else if (route.name === 'Emergency') {
              iconName = 'phone-call';
            } else if (route.name === 'Notifications') {
              iconName = 'bell';
            } else if (route.name === 'Settings') {
              iconName = 'settings';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#00AEEF', // Active icon color (blue)
          tabBarInactiveTintColor: '#888', // Inactive icon color (gray)
          tabBarStyle: { height: 70, paddingBottom: 10, borderRadius: 15 },
        })}
      >
        <Tab.Screen name="Dashboard" component={Dashboard} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavBar;
