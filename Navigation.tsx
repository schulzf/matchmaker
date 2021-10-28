import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {globalStyles} from './src/utils/globalStyles';
import ChatScreen from './src/screens/ChatScreen';
import MatchesScreen from './src/screens/MatchesScreen';

interface indexProps {}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: globalStyles.main_color.color,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name="home-outline"
              size={24}
              color={globalStyles.main_color.color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Matches"
        component={MatchesScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name="star-outline"
              size={24}
              color={globalStyles.main_color.color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name="chatbubble-outline"
              size={24}
              color={globalStyles.main_color.color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const Navigation: React.FC<indexProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Root" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
