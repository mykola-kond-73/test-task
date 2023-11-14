const initialState = {
    pagination_withdraw: null,
    list_orders_withdraw: [],

    pagination_deposits: null,
    list_orders_deposits: [],

    pagination_transfer: null,
    list_orders_transfer: [],
};

export default function (state = initialState, action) {
    const data = action.payload;

    switch (action.type) {
        /**
         * WITHDRAW
         */
        case 'PAGINATION_PARAMS_WITHDRAW' : {
            state.pagination_withdraw = data;

            return state;
        }

        case 'LIST_WITHDRAW_ORDERS' : {
            state.list_orders_withdraw = data;

            return state;
        }

        case 'UPDATE_WITHDRAW_ORDERS_LIST' : {
            //console.log('UPDATE_WITHDRAW_ORDERS_LIST', data);

            state.list_orders_withdraw[data.index] = data.order;
            state.list_orders_withdraw = [...state.list_orders_withdraw];

            return state;
        }

        /**
         * DEPOSITS
         */
        case 'PAGINATION_PARAMS_DEPOSITS' : {
            state.pagination_deposits = data;

            return state;
        }
        case 'LIST_DEPOSITS_ORDERS' : {
            state.list_orders_deposits = data;

            return state;
        }
        case 'UPDATE_REFILL_ORDERS_LIST' : {
            //console.log('UPDATE_REFILL_ORDERS_LIST', data);

            state.list_orders_deposits[data.index] = data.order;
            state.list_orders_deposits = [...state.list_orders_deposits];

            return state;
        }

        /**
         * TRANSFER
         */
        case 'PAGINATION_PARAMS_TRANSFER' : {
            state.pagination_transfer = data;

            return state;
        }
        case 'LIST_TRANSFER_ORDERS' : {
            state.list_orders_transfer = data;

            return state;
        }
        case 'UPDATE_TRANSFER_ORDERS_LIST' : {
            //console.log('UPDATE_REFILL_ORDERS_LIST', data);

            state.list_orders_transfer[data.index] = data.order;
            state.list_orders_transfer = [...state.list_orders_deposits];

            return state;
        }

        default:
            return state;
    }
}