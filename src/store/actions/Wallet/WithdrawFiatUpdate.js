import TradingPrepare from "../../../utils/TraderPrepare";

export function withdrawFiatUpdate(order) {
    return (dispatch, getState) => {
        const walletState = getState().wallet;

        let new_order = TradingPrepare.prepareRecentFiatFlows([order], false);
        let found = false;

        for (let i in walletState.recent_fiat_withdrawals) {
            if (walletState.recent_fiat_withdrawals[i].id === new_order[0].id) {
                found = true;

                dispatch({
                    type: 'UPDATE_FIAT_WITHDRAW',
                    payload: {
                        index: i,
                        order: new_order[0]
                    }
                });
            }
        }
    }
}