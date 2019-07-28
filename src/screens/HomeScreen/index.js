import {Component} from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import { HeaderIcon } from '@components/widgets';
import { colors, measures } from '@common/styles';
import { General as GeneralActions, Wallets as WalletActions, Prices as PricesActions } from '@common/actions';
import NoWallets from './NoWallets';
import TotalBalance from './TotalBalance';
import WalletCard from './WalletCard';


export class HomeScreen extends Component {
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

    renderBody = (list) => (!list.length && !this.loading) ? <NoWallets /> : (
        <Card>
            <CardItem>
             </CardItem>
        </Card>
    );

    render() {
        const { list } = this.props.wallets;
        return (
            <View style={styles.container}>
                <TotalBalance wallets={list} />
                {this.renderBody(list)}
            </View>
        );
    }
}