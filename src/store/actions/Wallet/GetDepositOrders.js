import TradingPrepare from "../../../utils/TraderPrepare";
import axios from "../../../utils/Api";

export function getDepositOrders(data) {
    return (dispatch) => {
        return new Promise((resolve) => {
            // const data = data || {
            //     page: 1,
            //     limit: 100
            // }

            axios.post('/api/deposit/list-refills', data).then((resp) => {
                if (resp.status === 200 && resp.data.status) {
                    const data = resp.data.data;

                    dispatch({
                        type: 'PAGINATION_PARAMS_DEPOSITS',
                        payload: {
                            limit: data.limit,
                            page: data.page,
                            totalPage: data.totalPage,
                        }
                    });

                    dispatch({
                        type: 'LIST_DEPOSITS_ORDERS',
                        payload: TradingPrepare.prepareRecentCashFlows(data.list, true)
                    });

                    resolve('success');
                }
            });
        });
    }
}
