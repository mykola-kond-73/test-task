import TradingPrepare from "../../../utils/TraderPrepare";

export function withdrawCryptoUpdate(order) {
    return (dispatch, getState) => {
        const walletState = getState().wallet;

        console.log("withdrawCryptoUpdate state", walletState)
        console.log("withdrawCryptoUpdate order", order)

        let index = 0;
        if (walletState.list_orders_withdraw.length > 0) {
            let found = false;

            // Find current order in store
            for (const i in walletState.list_orders_withdraw) {
                if (walletState.list_orders_withdraw[i].id === order.id) {
                    index = i;
                    found = true;
                }
            }

            // If not found in list, it's new order
            if (!found) {
                index = walletState.list_orders_withdraw.length
            }
        }

        const new_order = TradingPrepare.prepareRecentCashFlows([order], false);

        console.log("withdrawCryptoUpdate index", index);

        dispatch({
            type: 'UPDATE_WITHDRAW_ORDERS_LIST',
            payload: {
                index: index,
                order: new_order[0]
            }
        });
    }
}