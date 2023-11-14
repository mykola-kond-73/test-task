import TradingPrepare from "../../../utils/TraderPrepare";

export function refillCryptoUpdate(order) {
    return (dispatch, getState) => {
        const walletState = getState().wallet;

        console.log("refillCryptoUpdate state", walletState)
        console.log("refillCryptoUpdate order", order)

        let index = 0;
        if(walletState.list_orders_deposits.length > 0) {
            let found = false;

            // Find current order in store
            for (const i in walletState.list_orders_deposits) {
                if (walletState.list_orders_deposits[i].id === order.id) {
                    index = i;
                    found = true;
                }
            }

            // If not found in list, it's new order
            if (!found) {
                index = walletState.list_orders_deposits.length
            }
        }

        const new_order = TradingPrepare.prepareRecentCashFlows([order], true);

        console.log("refillCryptoUpdate index", index);

        dispatch({
            type: 'UPDATE_REFILL_ORDERS_LIST',
            payload: {
                index: index,
                order: new_order[0]
            }
        });
    }
}