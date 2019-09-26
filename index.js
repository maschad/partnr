/**
 * @format
 */

import './shims'
import {AppRegistry, YellowBox} from 'react-native'
import App from './src/App'
import {name as appName} from './app.json'

import React from 'react'
import {Drizzle, generateStore} from 'drizzle'
import MyStringStore from './build/contracts/MyStringStore.json'

YellowBox.ignoreWarnings([
    'Warning: componentWillMount',
    'Warning: componentWillReceiveProps',
    'Module RCTImageLoader',
    'Class RCTCxxModule was not exported',
    'Remote debugger'
  ]);

const options = {
    contracts: [MyStringStore]
}
const drizzleStore = generateStore(options)
const drizzle = new Drizzle(options, drizzleStore)

AppRegistry.registerComponent(appName, () => () => <App drizzle={drizzle}/>)
