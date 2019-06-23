import React from 'react'
import {Button, StyleSheet, Text, TextInput, View} from 'react-native'

class SetString extends React.Component {
    state = {stackId: null, text: ''}

    submit = () => {
        this.setValue(this.state.text)
    }

    setValue = value => {
        const {drizzle, drizzleState} = this.props
        const contract = drizzle.contracts.MyStringStore

        // let drizzle know we want to call the `set` method with `value`
        const stackId = contract.methods['set'].cacheSend(value, {
            from: drizzleState.accounts[0]
        })

        // save the `stackId` for later reference
        this.setState({stackId})
    }

    getTxStatus = () => {
        // get the transaction states from the drizzle state
        const {transactions, transactionStack} = this.props.drizzleState

        // get the transaction hash using our saved `stackId`
        const txHash = transactionStack[this.state.stackId]

        // if transaction hash does not exist, don't display anything
        if (!txHash) return null

        // otherwise, return the transaction status
        if (transactions[txHash] && transactions[txHash].status)
            return `Transaction status: ${transactions[txHash].status}`

        return null
    }

    render() {
        return (
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={text => this.setState({text})}
                    value={this.state.text}
                    placeholder="Enter some text"
                />
                <Button title="Submit" onPress={this.submit}/>
                <Text>{this.getTxStatus()}</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    }
})

export default SetString