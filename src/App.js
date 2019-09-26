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
import Router from './Router'

const STATUSBAR_CONFIG = {
    backgroundColor: colors.statusBar,
    barStyle: 'light-content',
    translucent: false
};


export default class App extends Component {
    state = {loading: true, drizzleState: null}

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', () => this.handleBackButton());
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
        BackHandler.removeEventListener('hardwareBackPress');
        this.unsubscribe()
    }

    handleFirstConnectivityChange = (connection) => {
        const connectionType = connection.type === 'none' ? 'offline' : 'online'
        if (connection.type === 'none') {
          // TODO: Show toast for no internet
        }
        this.setState({connectionType});
      }

    handleBackButton() {
        if (!this.props.navigation) return false;
        
        const { state, goBack } = this.props.navigation;
        if (state.routes.length > 1 && state.index > 0) {
            goBack();
            return true;
        }
        return false;
    }

    render() {
        return (
            <Provider {...stores}>
                <View style={styles.container}>
                    <StatusBar
                        {...STATUSBAR_CONFIG}
                    />
                    <Router />
                    <Spinner
                    visible={false}
                    ref={(ref) => { NavStore.loading = ref }}
                    />
                </View>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.defaultBackground,
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center'
    }
});