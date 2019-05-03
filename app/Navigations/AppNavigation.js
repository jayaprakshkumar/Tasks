import { createSwitchNavigator} from 'react-navigation'
import GustNavigation from './GustNavigation'
import UserNavigation from './UserNavigation'
import Loading from '../Component/Pages/Auth/Loading/'


export const createAppNavigation = (loading = true, signedIn = false) =>{
  
  return createSwitchNavigator({
      Loading: { 
        screen: Loading,
        navigationOptions: { title: 'Loading' }
      },
      Gust: { screen: GustNavigation },
      User: { screen: UserNavigation }
  },{
    headerMode:"none",
    initialRouteName: loading?"Loading":(signedIn?"User":"Gust")
  })
};
