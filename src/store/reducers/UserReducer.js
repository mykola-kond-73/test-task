/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    emptyBalance: '',
    portfolio_tab_curr: 'BTC',
    account_info: null, // {address_book: [], profile: {}, security: {}, trading: {}}
    accountSettings: null,
    user_balances: {},
    smallBalances: {
        hide: false,
        type: null
    },
    balance_main: {}, // {balance:10, available:20},
    balance_second: {}, // {balance:290, available:40},
    balances_ready: false,
    available_balance: {
        total: {
            usdt: 0,
            btc: 0,
        },
        spot: {
            usdt: 0,
            btc: 0,
        },
        margin: {
            usdt: 0,
            btc: 0,
        },
        funding: {
            usdt: 0,
            btc: 0,
        }
    },
    balance_pnl: 0,
    balance_pnl_btc: 0,
    isBalanceShown: true,
    portfolio_period_bal_list: null,
    portfolio_period_bal: null,
    portfolio_period_yield: null,
    portfolio_yield: null,
    portfolio_yield_ready: false,
    portfolio_balance_ready: false,
    portfolio_bal: null,
    pair_chart_day_data: {},
    pair_chart_months_data: {},
    active_orders_show: [],
    margin_orders_show: [],
    margin_history_orders_show: [],
    aod: {},
    active_resp_come: false,
    margin_resp_come: false,
    margin_history_resp_come: false,
    mod: {},
    mhod: {},
    hod: {},
    history_orders_show: [],
    history_resp_come: false,
    wallets_list: [],
    tables_rows: 10,
    isPrivateWallets: null,
    isPrivateWalletsCurrency: [],
    privateDepositFlag: false,
    currentExchAdress: null,
    currentCurrency: {
        currency: 'USDT',
        isRoute: false
    },
    tmpEthTokens: [
        'TUSD',
        'USDT',
        'USDC',
        'PAX',
        'BAT',
        'AGI',
        'DENT',
        'DGD',
        'DRTC',
        'ENG',
        'ESAX',
        'ETHOS',
        'EVC',
        'EVX',
        'FET',
        'GNT',
        'HOT',
        'JOB',
        'LEND',
        'LINK',
        'LOOM',
        'LRC',
        'MANA',
        'MCO',
        'MKR',
        'NEXO',
        'NPXS',
        'OMG',
        'POLY',
        'POWR',
        'PPT',
        'SNT',
        'WTC',
        'ZRX'
    ],
    fullethTokens: [],
    confirmationLinkData: null,
    redirs_after_confirmation_link: {
        4: 'approve' //TYPE_WITHDRAW
    },
    ethTokensContracts: [
        {
            tokenName: 'TUSD',
            contractAddress: '0x0000000000085d4780B73119b644AE5ecd22b376',
        },
        {
            tokenName: 'USDT',
            contractAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        },
        {
            tokenName: 'USDC',
            contractAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        },
        {
            tokenName: 'PAX',
            contractAddress: '0x8e870d67f660d95d5be530380d0ec0bd388289e1',
        },
        {
            tokenName: 'BAT',
            contractAddress: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
        },
        {
            tokenName: 'AGI',
            contractAddress: '0x8eb24319393716668d768dcec29356ae9cffe285',
        },
        {
            tokenName: 'DENT',
            contractAddress: '0x3597bfd533a99c9aa083587b074434e61eb0a258',
        },
        {
            tokenName: 'DAI',
            contractAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        },
        {
            tokenName: 'DGD',
            contractAddress: '0xe0b7927c4af23765cb51314a0e0521a9645f0e2a',
        },
        {
            tokenName: 'DRTC',
            contractAddress: '0xc4cbb8a3117f0738330fa139ca8ffbb13e8932fc',
        },
        {
            tokenName: 'ENG',
            contractAddress: '0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4',
        },
        {
            tokenName: 'ESAX',
            contractAddress: '0xa7b87611a9577cb8ad3f9b1e85e7884933603405',
        },
        {
            tokenName: 'ETHOS',
            contractAddress: '0x5af2be193a6abca9c8817001f45744777db30756',
        },
        {
            tokenName: 'EVC',
            contractAddress: '0xb62d18dea74045e822352ce4b3ee77319dc5ff2f',
        },
        {
            tokenName: 'EVX',
            contractAddress: '0xf3db5fa2c66b7af3eb0c0b782510816cbe4813b8',
        },
        {
            tokenName: 'FET',
            contractAddress: '0x1d287cc25dad7ccaf76a26bc660c5f7c8e2a05bd',
        },
        {
            tokenName: 'GNT',
            contractAddress: '0xa74476443119A942dE498590Fe1f2454d7D4aC0d',
        },
        {
            tokenName: 'HOT',
            contractAddress: '0x6c6ee5e31d828de241282b9606c8e98ea48526e2',
        },
        {
            tokenName: 'JOB',
            contractAddress: '0xdfbc9050f5b01df53512dcc39b4f2b2bbacd517a',
        },
        {
            tokenName: 'LEND',
            contractAddress: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
        },
        {
            tokenName: 'LINK',
            contractAddress: '0x514910771af9ca656af840dff83e8264ecf986ca',
        },
        {
            tokenName: 'LOOM',
            contractAddress: '0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0',
        },
        {
            tokenName: 'LRC',
            contractAddress: '0xbbbbca6a901c926f240b89eacb641d8aec7aeafd',
        },
        {
            tokenName: 'MANA',
            contractAddress: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942',
        },
        {
            tokenName: 'MCO',
            contractAddress: '0xb63b606ac810a52cca15e44bb630fd42d8d1d83d',
        },
        {
            tokenName: 'MKR',
            contractAddress: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
        },
        {
            tokenName: 'NEXO',
            contractAddress: '0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206',
        },
        {
            tokenName: 'NPXS',
            contractAddress: '0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3',
        },
        {
            tokenName: 'OMG',
            contractAddress: '0xd26114cd6EE289AccF82350c8d8487fedB8A0C07',
        },
        {
            tokenName: 'POLY',
            contractAddress: '0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec',
        },
        {
            tokenName: 'POWR',
            contractAddress: '0x595832f8fc6bf59c85c527fec3740a1b7a361269',
        },
        {
            tokenName: 'PPT',
            contractAddress: '0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a',
        },
        {
            tokenName: 'SNT',
            contractAddress: '0x744d70fdbe2ba4cf95131626614a1763df805b9e',
        },
        {
            tokenName: 'WTC',
            contractAddress: '0xb7cb1c96db6b22b0d3d9536e0108d062bd488f74',
        },
        {
            tokenName: 'ZRX',
            contractAddress: '0xe41d2489571d322189246dafa5ebde1f4699f498',
        },
    ],
    order_form_type_trade_class_balans: 0,
    api_keys_list: [],
    ieo_list: {},
    referral: {},
    verification_data: null
};

export default function (state = initialState, action) {
    const data = action.payload;

    switch (action.type) {
        case 'SET_CURRENT_CURRENCY':
            state.currentCurrency = {
                currency: data.currency,
                isRoute: data.isRoute
            }

            return { ...state };
        case 'FETCH_ACCOUNT_INFO':
            return {
                ...state,
                account_info: {
                    ...state.account_info,
                    profile: data.data.profile,
                    security: data.data.security,
                    trading: data.data.trading,
                }
            };
        case 'FETCH_ACCOUNT_SETTINGS': {
            return {
                ...state,
                accountSettings: data.settings
            };
        }
        case 'UPDATE_ACCOUNT_EMAIL':
            console.log({
                account_info: {
                    ...state.account_info,
                    profile: {
                        ...state.account_info.profile,
                        email: data.email
                    },
                }
            })
            return {
                ...state,
                account_info: {
                    ...state.account_info,
                    profile: {
                        ...state.account_info.profile,
                        email: data.email
                    },
                }
            }
        case 'FETCH_DEFAULT_LOCATION':
            return {
                ...state,
                defaultLocation: {
                    country: data.data.country
                }
            };
        case 'FETCH_ADDRESS_BOOK':
            const address_book = data.data.address_book;

            const formattedAddressBook = Object.keys(address_book).map((key) => {
                return address_book[key].map((obj) => {
                    return { ...obj, iso: key };
                });
            }).flat();

            return {
                ...state,
                account_info: {
                    ...data.data,
                    address_book: formattedAddressBook,
                    address_book_coins: Object.keys(address_book)
                }
            };
        case 'FETCH_VERIFICATION':
            return {
                ...state,
                verification_data: {
                    ...data.data,
                }
            };
        case 'FETCH_VERIFICATION_DETAILS':
            return {
                ...state,
                verification_data: {
                    ...data.data,
                }
            };
        case 'UPDATE_VERIFICATION_STATUS':
            let current = state.verification_data;

            if('verification' in current){
                current.verification.status = data.status_verification;
            }else{
                current['verification'] = {
                    status: data.status_verification
                }
            }

            return {
                ...state,
                verification_data: {
                    ...current,
                }
            };
        case 'FETCH_QUESTIONNAIRE_SETTINGS':
            return {
                ...state,
                questionnaire_settings: data.data.settings
            };
        case 'FETCH_LOGIN_HISTORY':
            return {
                ...state,
                login_history: data.data.list
            };
        case 'FETCH_API_KEYS': {
            return {
                ...state,
                api_keys_list: data.data.list
            };
        }
        case 'ADD_CREATED_API_KEY_TO_LIST': {
            return {
                ...state,
                api_keys_list: [
                    data,
                    ...state.api_keys_list
                ]
            };
        }
        case 'FETCH_REFERRAL': {
            // get refCode from link
            const linkParts = String(data.info.link).split('/');
            data.info.code = linkParts.at(-1);

            return {
                ...state,
                referral: data
            };
        }
        case 'FETCH_USER_IEO_LIST': {
            return {
                ...state,
                ieo_list: data.data
            }
        }
        case 'FETCH_VIP': {
            return {
                ...state,
                vip: data.data
            };
        }
        case 'FETCH_HISTORY': {
            return state;
        }
        case 'SWITCH_IS_BALANCE_SHOWN': {
            return {
                ...state,
                isBalanceShown: !(state.isBalanceShown)
            };
        }

        //######
        case 'BALANCES_READY_FLAG': {
            state.balances_ready = data;

            return state;
        }
        case 'INITIAL_ACTIVE_ORDERS': {
            //console.log('INITIAL_ACTIVE_ORDERS', data);

            if (data) {
                state.aod = data;
                state.active_orders_show = Object.keys(state.aod).map(i => state.aod[i]);
            } else {
                state.active_orders_show = [];
            }

            return { ...state };
        }
        case 'INITIAL_MARGIN_ORDERS': {
            //console.log('INITIAL_MARGIN_ORDERS', data);

            if (data) {
                state.mod = data;
                state.margin_orders_show = Object.keys(state.mod)
                    .map(i => state.mod[i]);
            } else {
                state.margin_orders_show = [];
            }

            return { ...state };
        }
        case 'INITIAL_MARGIN_HISTORY_ORDERS': {
            //console.log('INITIAL_MARGIN_HISTORY_ORDERS', data);

            if (data) {
                state.mhod = data;
                state.margin_history_orders_show = Object.keys(state.mhod)
                    .map(i => state.mhod[i]);
            } else {
                state.margin_history_orders_show = [];
            }

            return { ...state };
        }
        case 'INITIAL_DONE_ORDERS': {
            //console.log('INITIAL_DONE_ORDERS', data);

            if (data) {
                return {
                    ...state,
                    hod: data,
                    history_orders_show: Object.keys(data).map(i => data[i])
                }
            } else {
                return {
                    ...state,
                    history_orders_show: []
                };
            }
        }

        case 'ACTIVE_ORD_READY_FLAG': {
            state.active_resp_come = state.active_orders_show.length > 0 || data;

            return state;
        }
        case 'MARGIN_ORD_READY_FLAG': {
            state.margin_resp_come = state.margin_orders_show.length > 0 || data;

            return state;
        }
        case 'HISTORY_ORD_READY_FLAG': {
            state.history_resp_come = state.history_orders_show.length > 0 || data;

            return state;
        }
        case 'MARGIN_HISTORY_ORD_READY_FLAG': {
            state.margin_history_resp_come = state.margin_history_orders_show.length > 0 || data;

            return state;
        }
        case 'RESET_ACTIVE_ORDERS': {
            state.aod = {};
            state.active_orders_show = [];

            return state;
        }
        case 'RESET_MARGIN_ORDERS': {
            state.mod = {};
            state.margin_orders_show = [];

            return state;
        }
        case 'RESET_MARGIN_HISTORY_ORDERS': {
            state.mhod = {};
            state.margin_history_orders_show = [];

            return state;
        }
        case 'RESET_HISTORY_ORDERS': {
            state.hod = {};
            state.history_orders_show = [];

            return state;
        }
        case 'DELETE_ACTIVE_ORDER': {
            delete state.aod[data.index];

            state.active_orders_show = Object.keys(state.aod).map(i => state.aod[i]);

            return state;
        }
        case 'DELETE_MARGIN_ORDER': {
            delete state.mod[data.index];
            state.margin_orders_show = Object.keys(state.mod).map(i => state.mod[i]);

            return state;
        }
        case 'ADD_ORDER_ACTIVE': {
            state.aod[data.index] = data.order[data.index];
            state.active_orders_show = Object.keys(state.aod).map(i => state.aod[i]);

            return state;
        }
        case 'ADD_ORDER_TO_HISTORY': {
            state.hod[data.index] = data.order[data.index];
            state.history_orders_show = Object.keys(state.hod).map(i => state.hod[i]);

            return state;
        }
        case 'UPD_ORDERS_MARGIN': {
            for (const [id, order] of Object.entries(data)) {
                state.mod[id] = order;
            }

            state.margin_orders_show = Object.keys(state.mod).map(i => state.mod[i]);

            return state;
        }

        case 'UPD_ORDERS_MARGIN_HISTORY': {
            for (const [id, order] of Object.entries(data)) {
                state.mhod[id] = order;
            }

            state.margin_history_orders_show = Object.keys(state.mhod).map(i => state.mhod[i]);

            return state;
        }

        // case 'SET_CURRENT_BALANCES': {
        //     console.log('SET_CURRENT_BALANCES', data);

        //     state.balance_main = data.main_currency;
        //     state.balance_second = data.second_currency;

        //     return { ...state };
        // }
        case 'SET_CURRENT_BALANCE_CONVERTED': {
            //console.log('SET_CURRENT_BALANCE_CONVERTED', data)
            state.available_balance = data;

            return { ...state };
        }
        case 'UPDATE_USER_BALANCES': {
            // console.log('UPDATE_USER_BALANCES', state.smallBalances)
            let balances = [];

            if(state.smallBalances.hide){
                for (const key in data) {
                    const balance = Number(data[key][state.smallBalances.type].total_available_usdt);

                    if(balance >= 1){
                        state.user_balances[data[key].iso3] = data[key];

                        balances[data[key].iso3] = data[key];
                    }
                }
            }else{
                balances = data;
            }

            return {
                ...state,
                user_balances: balances,
                balances_ready: true
            };
        }

        case 'SET_HIDE_SMALL_BALANCES': {
            return {
                ...state,
                smallBalances: data
            };
        }

        default:
            return state;
    }
}
