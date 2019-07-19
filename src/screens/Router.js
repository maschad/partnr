import { StackNavigator } from 'react-navigation'
import * as Screens from '../screens';

const Router = StackNavigator(
    {
        HomePage: {
            screen: Screens.HomeScreen
        }
    },
    {
        initialRouteName: INITIAL_ROUTE,
        defaultNavigationOptions: {
          headerStyle: {
            backgroundColor: colors.primary
          },
          headerTintColor: colors.secondary,
          tintColor: colors.secondary
        }
    }
)

export default Router;