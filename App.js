import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

// Import Screens
import Home from './src/screens/Home';
import Explore from './src/screens/Explore';
import Impact from './src/screens/Impact';
import Profile from './src/screens/Profile';
import CampaignDetails from './src/screens/CampaignDetails';
import Donation from './src/screens/Donation';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Project') {
            iconName = focused ? 'compass' : 'compass-outline';
          } else if (route.name === 'Our Impact') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Donate') {
            return (
              <View style={{
                width: 44,
                height: 44,
                borderRadius: 22,
                backgroundColor: focused ? '#0D6B4F' : '#E8F5E9',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: -8,
              }}>
                <Ionicons
                  name={focused ? 'heart' : 'heart-outline'}
                  size={22}
                  color={focused ? '#fff' : '#0D6B4F'}
                />
              </View>
            );
          }
          return <Ionicons name={iconName} size={focused ? 24 : 22} color={color} />;
        },
        tabBarActiveTintColor: '#0D6B4F',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          height: 70,
          paddingBottom: 15,
          paddingTop: 10,
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#F0F0F0',
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.08,
          shadowRadius: 8,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Project" component={Explore} />
      <Tab.Screen name="Our Impact" component={Impact} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Donate" component={Donation} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="CampaignDetails" component={CampaignDetails} />
        <Stack.Screen name="Donation" component={Donation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
