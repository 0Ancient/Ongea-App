// client/App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeFeed from './screens/HomeFeed';
import Recorder from './screens/Recorder'; // Add this import

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeFeed">
        {/* Home Feed Screen */}
        <Stack.Screen 
          name="HomeFeed" 
          component={HomeFeed} 
          options={{ 
            headerShown: false 
          }} 
        />
        
        {/* Recorder Screen - Add this block */}
        <Stack.Screen 
          name="Recorder" 
          component={Recorder} 
          options={{ 
            headerShown: false 
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}