import React from 'react';
import {StyleSheet, View} from 'react-native';
import { Content, Card, CardItem, Text, Body } from 'native-base';


export default () => (
     <View style={styles.container}>
        <Content>
            <Card>
                <CardItem header>
                    <Text>No Wallets</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>Create a wallet</Text>
                    </Body>
                </CardItem>
            </Card>
        </Content>
     </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});