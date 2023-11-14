import TradingPrepare from "../../../utils/TraderPrepare";
import axios from "../../../utils/Api";

export function getTransferOrders(payload) {
    return (dispatch) => {
        return new Promise((resolve) => {
            // const payload = payload || {
            //     page: 1,
            //     limit: 100
            // }

            axios.post('/api/deposit/list-transfers', payload).then((resp) => {
                if (resp.status === 200 && resp.data.status) {
                    const data = resp.data.data;
                    //console.log('getTransferOrders', data)

                    dispatch({
                        type: 'PAGINATION_PARAMS_TRANSFER',
                        payload: {
                            limit: data.limit,
                            page: data.page,
                            totalPage: data.totalPage,
                        }
                    });

                    let ready_orders = [];
                    ready_orders[payload.currency_id] = TradingPrepare.prepareTransferOrders(data.list)
                    //console.log('fffffffffffff', ready_orders);

                    dispatch({
                        type: 'LIST_TRANSFER_ORDERS',
                        payload: ready_orders
                    });

                    resolve('success');
                }
            });
        });
    }
}
