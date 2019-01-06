import React from 'react';
import { createAppContainer, createDrawerNavigator, createStackNavigator } from "react-navigation";
import { StatusBar,Dimensions,Image }  from 'react-native'

import Icon from '@expo/vector-icons/Ionicons'
import { Provider } from 'react-redux'; 
import Store from './src/Store'

import SideMenu from './src/components/SideMenu/SideMenu';
import Home from './src/components/Home/Home';
import About from './src/components/About/About';

const { width } = Dimensions.get('window');

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: <Icon
                style={{paddingLeft: 10}} 
                onPress={() => navigation.openDrawer()}
                name="md-menu"
                color="white" 
                size={30} 
              />,
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff'
      };
    },
    navigationOptions: {
      drawerIcon: ({tintColor}) => (
          <Image
              source={require('./src/assets/imgs/bitcoin-brands.png')} 
              style={{width: 24, height: 24}} 
              />
      ),
    }
  }
)

const AboutNavigator = createStackNavigator(
  {
    About: {
      screen: About
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: <Icon
                style={{paddingLeft: 10}} 
                onPress={() => navigation.openDrawer()}
                name="md-menu"
                color="white" 
                size={30} 
              />,
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff'
      };
    },
    navigationOptions: {
      drawerIcon: ({tintColor}) => (
          <Image
              source={require('./src/assets/imgs/about.png')} 
              style={{width: 24, height: 24}} 
              />
      ),
    }
  }
)

const MyDrawerNavigator = createDrawerNavigator(
{
  "CriptoMonedas": HomeNavigator,
  "Sobre el autor": AboutNavigator
},
{
  contentComponent: SideMenu,
  contentOptions:{
    activeTintColor: '#f4511e'
  },
}
);

const AppContainer = createAppContainer(MyDrawerNavigator);

export default class App extends React.Component {

  constructor(props) {
    super(props)
    
    StatusBar.setBarStyle('light-content')
  }

  render(){
    return(
        <Provider store={Store}>
          <AppContainer/>        
        </Provider>
    )
  }
  
}
// export default createAppContainer(MyDrawerNavigator);

