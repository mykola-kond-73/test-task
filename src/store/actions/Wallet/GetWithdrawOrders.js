import TradingPrepare from "../../../utils/TraderPrepare";
import axios from "../../../utils/Api";

export function getWithdrawOrders (data) {
    return (dispatch) => {
        return new Promise((resolve) => {
            // const data = data || {
            //     page: 1,
            //     limit: 100
            // }

            axios.post('/api/deposit/list-withdraws', data).then((resp) => {
                if (resp.status === 200 && resp.data.status) {
                    const data = resp.data.data;

                    dispatch({
                        type: 'PAGINATION_PARAMS_WITHDRAW',
                        payload: {
                            limit: data.limit,
                            page: data.page,
                            totalPage: data.totalPage,
                        }
                    });

                    dispatch({
                        type: 'LIST_WITHDRAW_ORDERS',
                        payload: TradingPrepare.prepareRecentCashFlows(data.list)
                    });

                    resolve('success');
                }
            });
        });
    }
}