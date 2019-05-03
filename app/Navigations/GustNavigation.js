
import { createStackNavigator } from 'react-navigation'
import Login from '../Component/Pages/Auth/Login/'


// Manifest of possible screens
const GustNavigation = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: { title: 'Login' }
  }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'Login',
  contentOptions: {
    activeTintColor: "#e91e63"
  },
})

export default GustNavigation