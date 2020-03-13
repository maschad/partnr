import React from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';

import { inject, observer } from 'mobx-react';
import { HeaderIcon } from '@components/widgets';
import { colors, measures } from '@common/styles';

import { Container, Card, CardItem, Text, Body } from 'native-base';
import { Grid } from 'react-native-easy-grid';

import { General as GeneralActions, Wallets as WalletActions, Prices as PricesActions } from '@common/actions';


import NoWallets from './NoWallets';
import TotalBalance from './TotalBalance';
import WalletCard from './WalletCard';

@inject('prices', 'wallets')
@observer
export class WalletsOverview extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'Home',
        headerRight: (
            <HeaderIcon
                name='settings'
                size='medium'
                type='md'
                color={colors.white}
                onPress={() => navigation.navigate('Settings')} />
        )
    });

    get loading() {
        return this.props.prices.loading || this.props.wallets.loading;
    }

    componentDidMount() {
        this.populate();
    }

    async populate() {
        try {
            await Promise.all([
                WalletActions.loadWallets(),
                PricesActions.getPrice()
            ]);
        } catch (e) {
            GeneralActions.notify(e.message, 'long');
        }
    }

    onPressWallet(wallet) {
        if (this.loading) return;
        WalletActions.selectWallet(wallet);
        this.props.navigation.navigate('WalletDetails', { wallet });
    }

    renderItem = ({ item }) => <WalletCard wallet={item} onPress={() => this.onPressWallet(item)} />

    renderBody = (list) => (
        <View>
        <TotalBalance wallets={list} />
        <FlatList
            style={styles.content}
            data={list}
            refreshControl={<RefreshControl refreshing={this.loading} onRefresh={() => this.populate()} />}
            keyExtractor={(item, index) => String(index)}
            renderItem={this.renderItem} />
        </View>
       
    );

    render() {
        const { list } = this.props.wallets;
        const { navigation } = this.props;
        return (
            <Container>
                {(!list.length && !this.loading) ? <NoWallets {...navigation}/> : this.renderBody(list)}
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        marginTop: measures.defaultMargin
    }
});