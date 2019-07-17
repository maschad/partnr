import { StackNavigator } from 'react-navigation'

const Router = StackNavigator(
    {
        LoginStack:{
            screen:
        }
    },
    {
        initialRouteName: 'LoginStack',
        cardStyle: { backgroundColor: AppStyle.backgroundColor },
        mode: 'modal'
    }
)

export default Router;