import React from 'react';
import { createStackNavigator, createAppContainer,createDrawerNavigator } from "react-navigation";
import Home from './src/components/Home/Home';
import { View, Text,StyleSheet, StatusBar}  from 'react-native'
import SideMenu from './src/components/SideMenu/SideMenu';

StatusBar.setBarStyle('dark-content')
// const AppNavigator = createStackNavigator(
//   {
//     Home: {
//       screen: Home,
//     }
//   }
// );

const MyDrawerNavigator = createDrawerNavigator(
{
  Home: {
    screen: Home,
    navigationOptions: {
      headerStyle: {backgroundColor: '#E73536'},
      title: 'Test ',
      headerTintColor: 'white',
      headerMode: 'float'
    }
  }
},
{
  contentComponent: SideMenu,
  navigationOptions: {
    headerStyle: {backgroundColor: '#E73536'},
    title: 'Test ',
    headerTintColor: 'white',
    headerMode: 'float'
  }
}
);

export default createAppContainer(MyDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
