/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'


export default class App extends Component {
    state = {loading: true, drizzleState: null}

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

    render() {
        return (
            <View style={styles.container}>
            <Text>Working</Text>
                {/* #TODO: Re-add once contracts are fixed {this.state.loading ? (
                    <Text>Loading Drizzle...</Text>
                ) : (
                    <View>
                        <ReadString
                            drizzle={this.props.drizzle}
                            drizzleState={this.state.drizzleState}
                        />
                        <SetString
                            drizzle={this.props.drizzle}
                            drizzleState={this.state.drizzleState}
                        />
                    </View>
                )} */}
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