import React from 'react';
import { StyleSheet,Text,View, KeyboardAvoidingView}  from 'react-native';
import { createAppContainer, TabNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';  
import { createBottomTabNavigator } from 'react-navigation-tabs';


import { styles1 } from  "./styles/styles";

import Main from './screens/Main';
import Profile from './screens/Profile';

export const MainNavigator = createStackNavigator(
        { 
                Main: {screen: Main},
                Profile: {screen: Profile},
               
        },
        
        {
           headerMode: 'none',
        },
  
  
      
     
);
  
const App = createAppContainer(MainNavigator,);
export default App;