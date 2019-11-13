import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import { Body, Button, Content, Card, CardItem, Fab, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

 
export default () => {
    const [active, setActive] = useState(false);

    const onPress = () => {
        setActive(!active);
    }

    return (
        <View style={styles.container}>
            <Content>
                <Card>
                    <CardItem header>
                        <Text>Oops! Looks like you have no Wallets :(</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>Click the button below to add one :)</Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
            <Fab
                active={active}
                direction="up"
                containerStyle={{ }}
                style={{ backgroundColor: '#000' }}
                position="bottomRight"
                onPress={() => onPress()}>
                <Icon name="plus" size={30} color="#000" />
                <Button style={{ backgroundColor: '#FFF' }}>
                    <Icon name="bitcoin" size={30} color="#000" />
                </Button>
                <Button style={{ backgroundColor: '#3B5998' }}>
                    <Icon name="ethereum" size={30} color="#900" />
                </Button>
          </Fab>
        </View>
    );
}
 

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});