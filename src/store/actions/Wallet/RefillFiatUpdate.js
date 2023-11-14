import TradingPrepare from "../../../utils/TraderPrepare";

export function refillFiatUpdate(order) {
    return (dispatch, getState) => {
        const walletState = getState().wallet;

        let new_order = TradingPrepare.prepareRecentFiatFlows([order], true);
        let found = false;

        for (let i in walletState.recent_fiat_deposits) {
            if (walletState.recent_fiat_deposits[i].id === new_order[0].id) {
                found = true;

                dispatch({
                    type: 'UPDATE_FIAT_REFILL',
                    payload: {
                        index: i,
                        order: new_order[0]
                    }
                });
            }
        }
    }
}