
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Animated, Easing } from 'react-native';

import Secured from '../Component/Pages/Secured'

import Home from '../Component/Pages/Home/'
import UserList from '../Component/Pages/User/List/'
import SideBar from "../Component/Ui/Sidebar/"

const Drawer = createDrawerNavigator({
  Home: { screen: Home },
  UserList:{screen:UserList},
},{
  mode:'modal',
  initialRouteName: "Home",
  contentOptions: {
    activeTintColor: "#e91e63"
  },  
  contentComponent: SideBar,
  transitionConfig: () => ({
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      const height = layout.initHeight;
      const translateY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [height, 0, 0],
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
      });

      return { opacity, transform: [{ translateY }] };
    },
  })
})



// Manifest of possible screens
const UserNavigation = createStackNavigator({
  Drawer: { screen: Drawer },  
  UserList:{screen:UserList},
}, {
  // Default config for all screens
  mode:'modal',
  headerMode: 'none',
  initialRouteName: 'Drawer',
  navigationOptions: {},
  transitionConfig: () => ({
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      const height = layout.initHeight;
      const translateY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [height, 0, 0],
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.1, index],
        outputRange: [0, 1, 1],
      });

      return { opacity, transform: [{ translateY }] };
    },
  })
})



export default UserNavigation;