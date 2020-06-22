import React from 'react'; 
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';

const AppNavigator = createStackNavigator(  
  {  
    Home: HomeScreen,  
    Profile: ProfileScreen  
  },
  {  
    initialRouteName: "Home"  
  }  
);  
  
const AppContainer = createAppContainer(AppNavigator);  
export default class App extends React.Component {  
  render() {  
    return <AppContainer />;  
  }  
} 