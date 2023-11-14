const f = obj => Object.fromEntries(Object.entries(obj).map(a => a.reverse()))

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    timer_session: null,
    init_pairs: {},
    time_pasw_block: null,
    all_pairs: {}, // {id:1, main:"", second:"",}

    all_pairs_flip: {
        "BTCUSDT": 1041,
        "ETHUSDT": 1051,
        "LTCUSDT": 1061,
        "DOGEUSDT": 1101,
        "OMGUSDT": 1131,
        "BATUSDT": 1151,
        "ZRXUSDT": 1161,
        "ZILUSDT": 1171,
        "LINKUSDT": 1191,
        "MANAUSDT": 1201,
        "LRCUSDT": 1291,
        "ADAUSDT": 2471,
        "BNBUSDT": 2621,
        "WAVESUSDT": 3281,
        "MATICUSDT": 3421,
        "FTMUSDT": 3441,
        "ETCUSDT": 3771,
        "ENJUSDT": 4001,
        "TRXUSDT": 4061,
        "BTTUSDT": 4211,
        "SXPUSDT": 5531,
        "KNCUSDT": 5781,
        "BNTUSDT": 5921,
        "COMPUSDT": 6051,
        "BALUSDT": 6191,
        "YFIUSDT": 6391,
        "ATOMUSDT": 6431,
        "CRVUSDT": 6631,
        "DOTUSDT": 6671,
        "UMAUSDT": 6791,
        "SANDUSDT": 7031,
        "AAVEUSDT": 7081,
        "GRTUSDT": 7401,
        "YFIIUSDT": 7421,
        "SUSHIUSDT": 7461,
        "UNIUSDT": 7481,
        "1INCHUSDT": 7561,
        "AXSUSDT": 7601,
        "BUSDUSDT": 7661,
        "EGLDUSDT": 8021,
        "CAKEUSDT": 8091,
        "CHZUSDT": 8211,
        "ANKRUSDT": 8614,
        "APEUSDT": 8624,
        "AUDIOUSDT": 8634,
        "CVXUSDT": 8644,
        "ENSUSDT": 8654,
        "GALAUSDT": 8664,
        "IMXUSDT": 8674,
        "JSTUSDT": 8684,
        "LDOUSDT": 8694,
        "LPTUSDT": 8704,
        "OGNUSDT": 8714,
        "PAXGUSDT": 8724,
        "PLAUSDT": 8734,
        "QNTUSDT": 8744,
        "SKLUSDT": 8754,
        "SHIBUSDT": 8764,
        "WOOUSDT": 8774,
        "NEARUSDT": 8794
    },
    all_currencies: undefined,
    all_currencies_flip: f({
        "2": "BTC",
        "3": "ETH",
        "4": "LTC",
        "5": "BCH",
        "9": "XRP",
        "271": "LINK",
        "451": "USDT",
        "551": "ADA",
        "951": "XLM"
    }),
    fiat_currencies: [],
    withdraw_minimal: {}, // {ISO:0.5},
    stock_min_amount: {}, // {Pair:0.01},
    stock_max_amount: {}, // {Pair:0.01},

    // available_languages: Locales.available,
    short_months: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ],

    portfolio_diagram_colors: [
        '#00aa00',
        '#0000aa',
        '#aa0000',
        '#aaaa00',
        '#00aaaa',
        '#aa00aa',
        '#80ff80',
        '#8080ff',
        '#ff8080',
        '#ffff80',
        '#80ffff',
        '#ff80ff',
        '#008000',
        '#000080',
        '#800000',
        '#808000',
        '#008080',
        '#800080',
        '#80ff80',
        '#8080ff',
        '#ff8080',
        '#ffff80',
        '#80ffff',
        '#ff80ff',
    ],
    has_tag: [],

    // *      Network Types
    //  const TYPE_NETWORK_MAIN = 0;
    //  const TYPE_NETWORK_ETH = 1;
    //  const TYPE_NETWORK_TRX = 2;
    //  const TYPE_NETWORK_BNB = 3;
    //  const TYPE_NETWORK_BSC = 4;

    network_type_names: {
        0: 'Mainnet',
        1: 'ERC 20',
        2: 'TRC 20',
        3: 'BNB',
        4: 'BEP 20',
    },

    network_type_names_flip: {
        'Mainnet': 0,
        'ERC 20': 1,
        'TRC 20': 2,
        'BNB': 3,
        'BEP 20': 4,
    },

    currency_pairs_margin_leverage: {},

    // iso_pictures: iso_images_names,
    // iso_pictures_color: iso_images_names_color,

    all_icon: null,

    //flags_pictures,

    configs_ready: {
        all_pairs: false,
        all_currencies: false,
        time_zones: false,
        user_pairs: false,
        trade_commission: false,
    },
    current_lang: null,
    user_pairs: {},
    time_zones: {},
    user_t_zone: undefined,
    min_btc_amount_withdraw: 0,

    trade_commission: null,
    refill_commission: null,
    // withdraw_fees: [], // {name:'USD', fee:1}
    nice_ccy_names: {},
    all_coins_info: [],
    currency_descriptions: [],

    // socials: [
    //     ...innerConfig.socials
    // ],

    vertical_socials: {
        twitter: true,
        telegram: true,
        facebook: true,
        medium: true,
    },
    socials_classes: {
        twitter: 'fa-twitter',
        telegram: 'fa-telegram-plane',
        facebook: 'fa-facebook-f',
        instagram: 'fa-instagram',
        reddit: 'fa-reddit',
        medium: 'fa-medium',
        vkontakte: 'fa-vk',
        linkedIn: 'fa-linkedin-in',
        GitHub: 'fa-github',
        etherscan: 'fa-ether',
    },
    ieo_documents_classes: {
        youtube: 'yt_link',
        pdf: 'pdf_file',
        else: 'excel_file',
    },
    ieo_documents_item_classes: {
        pdf: 'pdf',
        youtube: 'yt',
        else: 'xcl',
    },
    ieo_list: null,
    max_limit_btc: 0,
    curr_withdraw: null,
    curr_deposit: null,

    currency_decimals: {},
    currency_data: {
        "2": {
            "id": 2,
            "iso3": "BTC",
            "name": "Bitcoin",
            "status": 0,
            "type": 1,
            "time_create": 1511172670,
            "time_update": 1605117604,
            "min_commission": 0,
            "icon": "12a6496753f6f6d26ece2d8a002210b2.png",
            "fixed": 0,
            "percent": 0.1,
            "min_withdraw": 0,
            "decimal": 8,
            "count_confirmation": 1,
            "min_refill": 0,
            "percent_refill": 0,
            "fixed_refill": 0,
            "min_commission_refill": 0,
            "description": "<p>Bitcoin (BTC) is a consensus network that enables a new payment system and a completely digital currency. Powered by its users, it is a peer to peer payment network that requires no central authority to operate. On October 31st, 2008, an individual or group of individuals operating under the pseudonym &#39;Satoshi Nakamoto&#39; published the Bitcoin Whitepaper and described it as: &#39;a purely peer-to-peer version of electronic cash, which would allow online payments to be sent directly from one party to another without going through a financial institution.&#39;</p>\r\n",
            "type_filter": "\"\"",
            "main_wallet": "bc1qellu94x5w9crw9spujfdqrf86f5wvj0v2v5cx6",
            "link": "https://bitcoin.org",
            "in": 1,
            "out": 1,
            "time_of_confirmation": null,
            "coin_type": "Mainnet",
            "system_info": "",
            "max_withdraw": 0,
            "after_dot": 4,
            "usdt_rate": null,
            "count_order_withdraw": 0,
            "is_not_public": 0,
            "decimal_rounding": 5,
            "network_decimals": null,
            "notify_min_system_balance_usdt": null,
            "StatusFromCoinService": [
                {
                    "id": 34,
                    "currency_id": 2,
                    "network_type": 0,
                    "is_deposit_active": 0,
                    "is_withdrawals_active": 0,
                    "time_create": 1663363072,
                    "time_update": 1697805209
                }
            ],
            "networks": [
                {
                    "id": 0,
                    "name": "Main",
                    "token_type": "",
                    "contract": "",
                    "is_deposit_on": true,
                    "is_withdraw_on": true
                }
            ]
        },
        "3": {
            "id": 3,
            "iso3": "ETH",
            "name": "Ethereum",
            "status": 0,
            "type": 1,
            "time_create": 1513085558,
            "time_update": 1636538404,
            "min_commission": 0.015,
            "icon": "12a6496753f6f6d26ece2d8a002210b2.png",
            "fixed": 0.015,
            "percent": 0.1,
            "min_withdraw": 0.03,
            "decimal": 8,
            "count_confirmation": 3,
            "min_refill": 0.03,
            "percent_refill": 0,
            "fixed_refill": 0.015,
            "min_commission_refill": 0.015,
            "description": "<p>Ethereum (ETH) is a smart contract platform that enables developers to build decentralized applications (dapps) conceptualized by Vitalik Buterin in 2013. ETH is the native currency for the Ethereum platform and also works as the transaction fees to miners on the Ethereum network.</p>\r\n",
            "type_filter": "[\"3\"]",
            "main_wallet": "0x690e96f32a225f661a1881a484f858276cb82984",
            "link": "https://ethereum.org",
            "in": 1,
            "out": 1,
            "time_of_confirmation": null,
            "coin_type": "Mainnet",
            "system_info": "",
            "max_withdraw": 0,
            "after_dot": 3,
            "usdt_rate": null,
            "count_order_withdraw": 0,
            "is_not_public": 0,
            "decimal_rounding": 5,
            "network_decimals": null,
            "notify_min_system_balance_usdt": null,
            "StatusFromCoinService": [
                {
                    "id": 4,
                    "currency_id": 3,
                    "network_type": 0,
                    "is_deposit_active": 0,
                    "is_withdrawals_active": 0,
                    "time_create": 1663363072,
                    "time_update": 1697805209
                }
            ],
            "networks": [
                {
                    "id": 0,
                    "name": "Main",
                    "token_type": "",
                    "contract": "",
                    "is_deposit_on": true,
                    "is_withdraw_on": true
                }
            ]
        },
        "4": {
            "id": 4,
            "iso3": "LTC",
            "name": "LiteCoin",
            "status": 0,
            "type": 1,
            "time_create": 1515753200,
            "time_update": 1605117604,
            "min_commission": 0.001,
            "icon": "12a6496753f6f6d26ece2d8a002210b2.png",
            "fixed": 0.001,
            "percent": 0.1,
            "min_withdraw": 0.001,
            "decimal": 8,
            "count_confirmation": 3,
            "min_refill": 0,
            "percent_refill": 0,
            "fixed_refill": 0,
            "min_commission_refill": 0,
            "description": "<p>Litecoin is a peer-to-peer cryptocurrency created by Charlie Lee. It was created based on the Bitcoin protocol but differs in terms of the hashing algorithm used. Litecoin uses the memory intensive Scrypt proof of work mining algorithm. Scrypt allows consumer-grade hardware such as GPU to mine those coins.</p>\r\n",
            "type_filter": "\"\"",
            "main_wallet": "MR6RkQZXer64orHSVxLYQWaJk8QRbXGiJF",
            "link": "https://litecoin.org",
            "in": 0,
            "out": 0,
            "time_of_confirmation": null,
            "coin_type": "Mainnet",
            "system_info": "",
            "max_withdraw": 0,
            "after_dot": 3,
            "usdt_rate": null,
            "count_order_withdraw": 0,
            "is_not_public": 0,
            "decimal_rounding": 5,
            "network_decimals": null,
            "notify_min_system_balance_usdt": null,
            "StatusFromCoinService": [
                {
                    "id": 74,
                    "currency_id": 4,
                    "network_type": 0,
                    "is_deposit_active": 0,
                    "is_withdrawals_active": 0,
                    "time_create": 1663363072,
                    "time_update": 1697805209
                }
            ],
            "networks": [
                {
                    "id": 0,
                    "name": "Main",
                    "token_type": "",
                    "contract": "",
                    "is_deposit_on": true,
                    "is_withdraw_on": false
                }
            ]
        },
        "5": {
            "id": 5,
            "iso3": "BCH",
            "name": "Bitcoin Cash",
            "status": 0,
            "type": 1,
            "time_create": 1515753225,
            "time_update": 1605117604,
            "min_commission": 0.001,
            "icon": "12a6496753f6f6d26ece2d8a002210b2.png",
            "fixed": 0.001,
            "percent": 0.1,
            "min_withdraw": 0.001,
            "decimal": 8,
            "count_confirmation": 3,
            "min_refill": 0.002,
            "percent_refill": 0,
            "fixed_refill": 0,
            "min_commission_refill": 0,
            "description": "<p>Bitcoin Cash (BCH) is hard fork (a community-activated update to the protocol or code) of Bitcoin that took effect on August 1st, 2017 that increased the block size to 8MB, to help the scale the underlying technology of Bitcoin.Nov 16th 2018: BCH was hard forked again and split into Bitcoin SV and Bitcoin ABC. Bitcoin ABC became the dominant chain and took over the BCH ticker as it had more hashpower and majority of the nodes in the network.</p>\r\n",
            "type_filter": "[]",
            "main_wallet": "bitcoincash:qz9e09mmp5nnsas2l545rqx7kjrclmnz0ch5kgh60s",
            "link": "https://www.bitcoincash.org",
            "in": 1,
            "out": 1,
            "time_of_confirmation": null,
            "coin_type": "Mainnet",
            "system_info": "",
            "max_withdraw": 0,
            "after_dot": 3,
            "usdt_rate": null,
            "count_order_withdraw": 0,
            "is_not_public": 0,
            "decimal_rounding": 5,
            "network_decimals": null,
            "notify_min_system_balance_usdt": null,
            "StatusFromCoinService": [],
            "networks": [
                {
                    "id": 0,
                    "name": "Main",
                    "token_type": "",
                    "contract": "",
                    "is_deposit_on": true,
                    "is_withdraw_on": true
                }
            ]
        },
        "9": {
            "id": 9,
            "iso3": "XRP",
            "name": "Ripple",
            "status": 0,
            "type": 1,
            "time_create": 1521110214,
            "time_update": 1605117604,
            "min_commission": 0.25,
            "icon": "12a6496753f6f6d26ece2d8a002210b2.png",
            "fixed": 0.25,
            "percent": 0.1,
            "min_withdraw": 0.25,
            "decimal": 6,
            "count_confirmation": 3,
            "min_refill": 0,
            "percent_refill": 0,
            "fixed_refill": 0,
            "min_commission_refill": 0,
            "description": "<p>XRP is an independent digital asset that is native to the XRP Ledger. With governance and fast transaction confirmations, XRP is said to be the most efficient settlement option for financial institutions and liquidity providers seeking global reach, accessibility, and fast settlement finality for interbank flows.</p>\r\n\r\n<p>According to Ripple, those who use the digital asset XRP to source liquidity can reportedly do so in seconds. The team at Ripple hopes to enable the world to move value like it already moves information on the web today.</p>\r\n",
            "type_filter": "[]",
            "main_wallet": "rhHJCAYsZ6pzSJijC2BtazKHTNdGVySkFx",
            "link": "https://ripple.com/xrp",
            "in": 1,
            "out": 1,
            "time_of_confirmation": null,
            "coin_type": "Mainnet",
            "system_info": "",
            "max_withdraw": 0,
            "after_dot": 2,
            "usdt_rate": null,
            "count_order_withdraw": 0,
            "is_not_public": 0,
            "decimal_rounding": 5,
            "network_decimals": null,
            "notify_min_system_balance_usdt": null,
            "StatusFromCoinService": [],
            "networks": [
                {
                    "id": 0,
                    "name": "Main",
                    "token_type": "",
                    "contract": "",
                    "is_deposit_on": true,
                    "is_withdraw_on": true
                }
            ]
        },
        "271": {
            "id": 271,
            "iso3": "LINK",
            "name": "Chainlink",
            "status": 0,
            "type": 1,
            "time_create": 1557327246,
            "time_update": 1636538405,
            "min_commission": 2,
            "icon": "12a6496753f6f6d26ece2d8a002210b2.png",
            "fixed": 2,
            "percent": 0.1,
            "min_withdraw": 4,
            "decimal": 8,
            "count_confirmation": 3,
            "min_refill": 0.2,
            "percent_refill": 0,
            "fixed_refill": 0,
            "min_commission_refill": 0.1,
            "description": "<p>Chainlink (LINK) is a decentralized oracle service, which aims to connect smart contracts with data from the real world. Since blockchains cannot access data outside their network, oracles are needed to function as data feeds in smart contracts. Oracles provide external data (e.g. temperature, weather) that trigger smart contract executions upon the fulfillment of pre-defined conditions. Participants on the Chainlink network are incentivized (through rewards) to provide smart contracts with access to external data feeds. Should users desire access to off-chain data, they can submit a requesting contract to ChainLink&rsquo;s network. These contracts will match the requesting contract with the appropriate oracles. The contracts include a reputation contract, an order-matching contract, and an aggregating contract. The aggregating contract gathers data of the selected oracles to find the most accurate result.</p>\r\n",
            "type_filter": "[\"3\",\"4\"]",
            "main_wallet": "",
            "link": "https://chain.link",
            "in": 1,
            "out": 1,
            "time_of_confirmation": null,
            "coin_type": "ERC 20",
            "system_info": "",
            "max_withdraw": 0,
            "after_dot": 1,
            "usdt_rate": null,
            "count_order_withdraw": 0,
            "is_not_public": 0,
            "decimal_rounding": 5,
            "network_decimals": 18,
            "notify_min_system_balance_usdt": null,
            "StatusFromCoinService": [
                {
                    "id": 134,
                    "currency_id": 271,
                    "network_type": 1,
                    "is_deposit_active": 0,
                    "is_withdrawals_active": 0,
                    "time_create": 1663363072,
                    "time_update": 1697805219
                }
            ],
            "networks": {
                "1": {
                    "id": 1,
                    "name": "ETH",
                    "token_type": "ERC 20",
                    "contract": "0x514910771AF9Ca656af840dff83E8264EcF986CA",
                    "is_deposit_on": true,
                    "is_withdraw_on": true
                }
            }
        },
        "451": {
            "id": 451,
            "iso3": "USDT",
            "name": "Tether",
            "status": 0,
            "type": 1,
            "time_create": 1559658340,
            "time_update": 1636538410,
            "min_commission": 0,
            "icon": "12a6496753f6f6d26ece2d8a002210b2.png",
            "fixed": 1,
            "percent": 0,
            "min_withdraw": 2,
            "decimal": 8,
            "count_confirmation": 3,
            "min_refill": 0,
            "percent_refill": 0,
            "fixed_refill": 0,
            "min_commission_refill": 0,
            "description": "<p>Tether (USDT) is a cryptocurrency with a value meant to mirror the value of the U.S. dollar. The idea was to create a stable cryptocurrency that can be used like digital dollars. Coins that serve this purpose of being a stable dollar substitute are called &ldquo;stable coins.&rdquo; According to their site, Tether converts cash into digital currency, to anchor or &ldquo;tether&rdquo; the value of the coin to the price of national currencies like the US dollar, the Euro, and the Yen.</p>\r\n",
            "type_filter": "[\"1\"]",
            "main_wallet": "",
            "link": "https://tether.to",
            "in": 1,
            "out": 1,
            "time_of_confirmation": null,
            "coin_type": "ERC 20",
            "system_info": "",
            "max_withdraw": 0,
            "after_dot": 0,
            "usdt_rate": null,
            "count_order_withdraw": 0,
            "is_not_public": 0,
            "decimal_rounding": 2,
            "network_decimals": 18,
            "notify_min_system_balance_usdt": null,
            "StatusFromCoinService": [
                {
                    "id": 44,
                    "currency_id": 451,
                    "network_type": 2,
                    "is_deposit_active": 0,
                    "is_withdrawals_active": 0,
                    "time_create": 1663363072,
                    "time_update": 1697805209
                },
                {
                    "id": 54,
                    "currency_id": 451,
                    "network_type": 1,
                    "is_deposit_active": 0,
                    "is_withdrawals_active": 0,
                    "time_create": 1663363072,
                    "time_update": 1697805209
                }
            ],
            "networks": {
                "1": {
                    "id": 1,
                    "name": "ETH",
                    "token_type": "ERC 20",
                    "contract": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
                    "is_deposit_on": true,
                    "is_withdraw_on": true
                },
                "2": {
                    "id": 2,
                    "name": "TRX",
                    "token_type": "TRC 20",
                    "contract": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
                    "is_deposit_on": true,
                    "is_withdraw_on": true
                },
                "4": {
                    "id": 4,
                    "name": "BSC",
                    "token_type": "BEP 20",
                    "contract": "0x55d398326f99059ff775485246999027b3197955",
                    "is_deposit_on": true,
                    "is_withdraw_on": true
                },
                "5": {
                    "id": 5,
                    "name": "BSCTESTNET",
                    "token_type": "BEP 20 TESTNET",
                    "contract": "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd",
                    "is_deposit_on": true,
                    "is_withdraw_on": true
                }
            }
        },
        "551": {
            "id": 551,
            "iso3": "ADA",
            "name": "Cardano",
            "status": 0,
            "type": 1,
            "time_create": 1562169255,
            "time_update": 1562169255,
            "min_commission": 1,
            "icon": "12a6496753f6f6d26ece2d8a002210b2.png",
            "fixed": 1,
            "percent": 0.1,
            "min_withdraw": 44,
            "decimal": 6,
            "count_confirmation": 3,
            "min_refill": null,
            "percent_refill": 0,
            "fixed_refill": 0,
            "min_commission_refill": null,
            "description": "",
            "type_filter": "[]",
            "main_wallet": "Ae2tdPwUPEZ72HCKZ8dk4sTSz2peD6WU8keLJ4yCfHgd3UPmYUfbXZPogPT",
            "link": "",
            "in": 1,
            "out": 0,
            "time_of_confirmation": null,
            "coin_type": "Mainnet",
            "system_info": "",
            "max_withdraw": 0,
            "after_dot": 0,
            "usdt_rate": null,
            "count_order_withdraw": 0,
            "is_not_public": 0,
            "decimal_rounding": 5,
            "network_decimals": null,
            "notify_min_system_balance_usdt": null,
            "StatusFromCoinService": [],
            "networks": [
                {
                    "id": 0,
                    "name": "Main",
                    "token_type": "",
                    "contract": "",
                    "is_deposit_on": true,
                    "is_withdraw_on": true
                }
            ]
        },
        "951": {
            "id": 951,
            "iso3": "XLM",
            "name": "Stellar",
            "status": 0,
            "type": 1,
            "time_create": 1568106103,
            "time_update": 1568106103,
            "min_commission": 0.01,
            "icon": "12a6496753f6f6d26ece2d8a002210b2.png",
            "fixed": 0.01,
            "percent": 0.1,
            "min_withdraw": 0.01,
            "decimal": 5,
            "count_confirmation": 3,
            "min_refill": null,
            "percent_refill": 0,
            "fixed_refill": null,
            "min_commission_refill": null,
            "description": "",
            "type_filter": "[]",
            "main_wallet": "GBXLDLEKE47A7DBRPFWGPLVCASFHNJDY2HOVQBTXK4K46DMMLAY5V2J2",
            "link": "",
            "in": 1,
            "out": 1,
            "time_of_confirmation": null,
            "coin_type": "Mainnet",
            "system_info": "",
            "max_withdraw": 0,
            "after_dot": 2,
            "usdt_rate": null,
            "count_order_withdraw": 0,
            "is_not_public": 0,
            "decimal_rounding": 5,
            "network_decimals": null,
            "notify_min_system_balance_usdt": null,
            "StatusFromCoinService": [],
            "networks": [
                {
                    "id": 0,
                    "name": "Main",
                    "token_type": "",
                    "contract": "",
                    "is_deposit_on": true,
                    "is_withdraw_on": true
                }
            ]
        }
    },
    pairs_info_orders_book: {},
    favorites_pairs: [],
    type_captcha: null,

    slider: [],
    default_pair_id: null,
    default_pair: null,
    currency_voting: null,
    settings_withdraw: [],
    withdraw_steps_user_require: [],
    pairs_limit_rate: null,
    refill: [],
    currency_status: {},

    verification_settings: undefined,

    block_is_active: {
        margin_active: false,
        news_active: false,
        private_wallets_active: false,
    },

    vip_data: {
        vip_params: null,
        vip_ranges: null,
    },

    project_name: '',
    project_host: '',

    isConfigsLoaded: false,
};

export default function (state = initialState, action) {
    const data = action.payload;

    switch (action.type) {
        case 'ADD_CONFIGS': {
            //console.log('ADD_CONFIGS', data);

            let all_currencies_flip = {};

            for (const key in data.all_currency) {
                all_currencies_flip = {
                    ...all_currencies_flip,
                    [data.all_currency[key]]: key
                };
            }

            if (data.session) {
                localStorage.setItem('session', data.session);
                state.timer_session = data.session;
            }

            state.settings_withdraw = data.settings_withdraw ? data.settings_withdraw.require : null;
            state.withdraw_steps_user_require = data.settings_withdraw.user_require ? data.settings_withdraw.user_require : null;

            state.curr_withdraw = data.currency_withdraw;
            state.curr_deposit = data.currency_deposit;

            state.pairs_info_orders_book = {
                currency_decimals: data.currency_decimals,
                pairs_info: data.pairs
            };
            state.currency_decimals = data.currency_decimals;
            state.currency_data = data.currency_data;
            state.nice_ccy_names = data.nice_ccy_names ?? null;
            state.init_pairs = data.all_pairs;

            state.all_currencies = data.all_currency;
            state.all_currencies_flip = all_currencies_flip;

            state.fiat_currencies = data.fiat_currencies;
            state.user_pairs = data.user_pairs;
            state.time_zones = data.time_zones;
            state.min_btc_amount_withdraw = data.min_btc_amount_withdraw ? data.min_btc_amount_withdraw : 0;
            state.time_pasw_block = data.time_password_block ? data.time_password_block : null;

            // state.menu = data.menu;
            state.all_pairs = data.pairs;
            state.all_pairs_flip = data.all_pairs_flip;
            state.withdraw_minimal = data.withdraw;

            state.stock_min_amount = data.trade_min || 0;
            state.stock_max_amount = data.trade_max || 0;

            state.currency_pairs_margin_leverage = data.currency_pairs_margin_leverage;

            state.trade_commission = data.trade_commission;

            state.refill_commission = data.commission_refill;

            state.commission = data.commission;
            state.has_tag = data.has_tag;
            state.configs_ready.trade_commission = !!data.trade_commission;
            state.configs_ready.user_pairs = true;
            state.configs_ready.all_currencies = true;
            state.configs_ready.time_zones = true;
            state.configs_ready.all_pairs = true;
            state.type_captcha = data.d_c;

            state.slider = data.slider;
            state.default_pair = data.default_pair.name;
            state.default_pair_id = data.all_pairs_flip[data.default_pair.name];
            state.time_login_block = data.time_login_block;
            state.currency_voting = data.currency_voting;
            state.pairs_limit_rate = data.pair_limit_rate;
            state.refill = data.refill;
            state.block_is_active = data.block_is_active || {};

            state.project_name = data.project_name;
            state.project_host = data.project_host;
            state.all_icon = data.currency_icons;

            state.banned_countries = data.banned_countries || [];
            state.settings_withdraw = data.settings_withdraw;

            state.verification_settings = data.verification_settings;

            state.vip_data = {
                vip_params: data.vip_params,
                vip_ranges: data.vip_ranges,
            };

            state.isConfigsLoaded = true;

            return { ...state };
        }
        case 'ADD_ICONS': {
            return { ...state, all_icon: data }
        }
        case 'SET_CURRENCY_STATUS': {

            // data.currency_id in state.currency_status || (state.currency_status[data.currency_id] = {});

            // state.currency_status[data.currency_id][data.network_type] = {
            //     data.is_deposit_active,
            //     data.is_withdrawals_active,
            // }

            return state;
        }
        case 'UPDATE_CURRENCY_STATUS': {
            return { ...state, currency_status: { ...state.currency_status } }
        }
        case 'FETCH_ACTIVE_CURRENCIES': {
            return { ...state, active_currencies: data.data }
        }
        case 'SET_LANGUAGE': {
            let resData = data;

            if (!resData || typeof resData === 'object') {
                resData = 'en';
            }

            if (resData.length !== 2) {
                resData = 'en';
            }

            state.current_lang = resData.toLowerCase();
            // localStorage.setItem('locale', resData.toLowerCase());

            return state;
        }
        case 'SET_SOCKETS_STATE': {
            return { ...state, socket_connected: data }
        }
        case 'SET_USER_TIMEZONE': {
            return { ...state, user_t_zone: data }
        }
        case 'SET_PAYMENT_SYSTEMS': {
            return { ...state, payment_systems: data.payments }
        }
        case 'SET_STOCK_COINS_INFO': {
            return { ...state, all_coins_info: data }
        }
        case 'RESET_PAYMENT_SYSTEMS': {
            return { ...state, payment_systems: [] }
        }
        case 'SET_COUNTRIES': {
            return { ...state, payment_countries: data }
        }
        case 'SET_CURRENCY_DESCRIPTIONS': {
            return { ...state, currency_descriptions: data }
        }
        case 'SET_LIMIT_BTC': {
            return { ...state, max_limit_btc: data }
        }
        case 'SET_FAVORITES': {
            if (data === undefined || data === null) {
                state.favorites_pairs = [];
            } else {
                state.favorites_pairs = data;
            }

            return state;
        }
        case 'FETCH_IEO': {
            return {
                ...state,
                ieo_list: data.data
            }
        }
        case 'FETCH_IEO_VIEW': {
            return {
                ...state,
                ieo_project: data.data
            }
        }
        default:
            return state;
    }
}
