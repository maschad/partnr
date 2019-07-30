import { StackNavigator } from 'react-navigation'
import * as Screens from '../screens';

const navigator = StackNavigator(
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

const AppContainer = createAppContainer(navigator);

export default AppContainer;