/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// External Dependencies
import React, {Component} from 'react'
import {
    StatusBar,
    View,
    NetInfo
  } from 'react-native'

// Internal Dependencies
import Router from './screens/Router'


export default class App extends Component {
    state = {loading: true, drizzleState: null}

    componentWillMount() {
        NetInfo.addEventListener(
            'connectionChange',
            this.handleFirstConnectivityChange
            )
    }

    componentDidMount() {
        const {drizzle} = this.props

        this.unsubscribe = drizzle.store.subscribe(() => {
            const drizzleState = drizzle.store.getState()

            if (drizzleState.drizzleStatus.initialized) {
                this.setState({loading: false, drizzleState})
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    handleFirstConnectivityChange = (connection) => {
        const connectionType = connection.type === 'none' ? 'offline' : 'online'
        if (connection.type === 'none') {
          // TODO: Show toast for no internet
        }
        this.setState({connectionType});
      }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                backgroundColor="transparent"
                barStyle="light-content"
                translucent
                />
                <Router />
                <BlindScreen
                ref={(ref) => { this.blind = ref }}
                />
                <Spinner
                visible={false}
                ref={(ref) => { NavStore.loading = ref }}
                />
             </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})