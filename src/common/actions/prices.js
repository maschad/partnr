import { Api as ApiService } from '@common/services';
import { prices as PricesStore } from '@common/stores';

export async function getPrice() {
    PricesStore.isLoading(true);
    const { data } = await ApiService.getPrice();
    PricesStore.setUSDRate(data.USD);
    PricesStore.setEURRate(data.EUR);
    PricesStore.setJMDRate(data.JMD);
    PricesStore.isLoading(false);
}