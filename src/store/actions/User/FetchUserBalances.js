import { prepareUserBalances } from "../../utils/PrepareUserBalances";

/**
 *
 * @param payload
 * @param token
 * @param sign
 * @returns {function(*, *): Promise<unknown>}
 */
export function fetchUserBalances(payload = null, token, sign) {
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            prepareUserBalances(dispatch, mockBalances, getState);
            resolve(mockBalances);
        })
    }
}

const mockBalances = {
    "total": {
        "USDT": "288791527835",
        "BTC": "9746961"
    },
    "total_with_currency_id": {
        "2": "9746961",
        "451": "288791527835"
    },
    "list": [
        {
            "balance": "0",
            "balance_available": "0",
            "deposit_type": "funding",
            "type": 1,
            "balances": {
                "LINK": "0",
                "UAH": 0,
                "BTC": 0,
                "USDT": 0,
                "USDT_total": 0
            },
            "currency": {
                "id": 271,
                "type": 1,
                "iso3": "LINK",
                "decimal": 8,
                "link": "https://chain.link",
                "name": "Chainlink",
                "time_create": 1557327246
            }
        },
        {
            "balance": "0",
            "balance_available": "0",
            "deposit_type": "margin",
            "type": 1,
            "balances": {
                "LINK": "0",
                "UAH": 0,
                "BTC": 0,
                "USDT": 0,
                "USDT_total": 0
            },
            "currency": {
                "id": 271,
                "type": 1,
                "iso3": "LINK",
                "decimal": 8,
                "link": "https://chain.link",
                "name": "Chainlink",
                "time_create": 1557327246
            }
        },
        {
            "balance": "0",
            "balance_available": "0",
            "deposit_type": "spot",
            "type": 1,
            "balances": {
                "LINK": "0",
                "UAH": 0,
                "BTC": 0,
                "USDT": 0,
                "USDT_total": 0
            },
            "currency": {
                "id": 271,
                "type": 1,
                "iso3": "LINK",
                "decimal": 8,
                "link": "https://chain.link",
                "name": "Chainlink",
                "time_create": 1557327246
            }
        },
        {
            "balance": "0",
            "balance_available": "0",
            "deposit_type": "funding",
            "type": 1,
            "balances": {
                "BTC": 0,
                "UAH": 0,
                "USDT": 0,
                "USDT_total": 0
            },
            "currency": {
                "id": 2,
                "type": 1,
                "iso3": "BTC",
                "decimal": 8,
                "link": "https://bitcoin.org",
                "name": "Bitcoin",
                "time_create": 1511172670
            }
        },
        {
            "balance": "0",
            "balance_available": "0",
            "deposit_type": "margin",
            "type": 1,
            "balances": {
                "BTC": 0,
                "UAH": 0,
                "USDT": 0,
                "USDT_total": 0
            },
            "currency": {
                "id": 2,
                "type": 1,
                "iso3": "BTC",
                "decimal": 8,
                "link": "https://bitcoin.org",
                "name": "Bitcoin",
                "time_create": 1511172670
            }
        },
        {
            "balance": "507780",
            "balance_available": "507780",
            "deposit_type": "spot",
            "type": 1,
            "balances": {
                "BTC": "507780",
                "USDT": "15044952686",
                "USDT_total": "15044952686"
            },
            "rate": {
                "USDT": "2962888000000",
                "BTC": "100000000"
            },
            "currency": {
                "id": 2,
                "type": 1,
                "iso3": "BTC",
                "decimal": 8,
                "link": "https://bitcoin.org",
                "name": "Bitcoin",
                "time_create": 1511172670
            }
        },
        {
            "balance": "0",
            "balance_available": "0",
            "deposit_type": "funding",
            "type": 1,
            "balances": {
                "ETH": "0",
                "UAH": 0,
                "BTC": 0,
                "USDT": 0,
                "USDT_total": 0
            },
            "currency": {
                "id": 3,
                "type": 1,
                "iso3": "ETH",
                "decimal": 8,
                "link": "https://ethereum.org",
                "name": "Ethereum",
                "time_create": 1513085558
            }
        },
        {
            "balance": "0",
            "balance_available": "0",
            "deposit_type": "margin",
            "type": 1,
            "balances": {
                "ETH": "0",
                "UAH": 0,
                "BTC": 0,
                "USDT": 0,
                "USDT_total": 0
            },
            "currency": {
                "id": 3,
                "type": 1,
                "iso3": "ETH",
                "decimal": 8,
                "link": "https://ethereum.org",
                "name": "Ethereum",
                "time_create": 1513085558
            }
        },
        {
            "balance": "97400736",
            "balance_available": "97400736",
            "deposit_type": "spot",
            "type": 1,
            "balances": {
                "ETH": "97400736",
                "BTC": "5291792",
                "USDT": "156789860769",
                "USDT_total": "156789860769"
            },
            "rate": {
                "USDT": "160974000000",
                "BTC": "5433010"
            },
            "currency": {
                "id": 3,
                "type": 1,
                "iso3": "ETH",
                "decimal": 8,
                "link": "https://ethereum.org",
                "name": "Ethereum",
                "time_create": 1513085558
            }
        },
        {
            "balance": "700000000",
            "balance_available": "700000000",
            "deposit_type": "funding",
            "type": 1,
            "balances": {
                "USDT": "700000000",
                "USDT_total": "700000000",
                "BTC": "23626"
            },
            "rate": {
                "USDT": "100000000"
            },
            "currency": {
                "id": 451,
                "type": 1,
                "iso3": "USDT",
                "decimal": 8,
                "link": "https://tether.to",
                "name": "Tether",
                "time_create": 1559658340
            }
        },
        {
            "balance": "0",
            "balance_available": "0",
            "deposit_type": "margin",
            "type": 1,
            "balances": {
                "USDT": 0,
                "UAH": 0,
                "BTC": 0,
                "USDT_total": 0
            },
            "currency": {
                "id": 451,
                "type": 1,
                "iso3": "USDT",
                "decimal": 8,
                "link": "https://tether.to",
                "name": "Tether",
                "time_create": 1559658340
            }
        },
        {
            "balance": "116256714380",
            "balance_available": "116256714380",
            "deposit_type": "spot",
            "type": 1,
            "balances": {
                "USDT": "116256714380",
                "USDT_total": "116256714380",
                "BTC": "3923763"
            },
            "rate": {
                "USDT": "100000000"
            },
            "currency": {
                "id": 451,
                "type": 1,
                "iso3": "USDT",
                "decimal": 8,
                "link": "https://tether.to",
                "name": "Tether",
                "time_create": 1559658340
            }
        },
        {
            "balance": "0",
            "balance_available": "0",
            "deposit_type": "funding",
            "type": 1,
            "balances": {
                "LTC": "0",
                "UAH": 0,
                "BTC": 0,
                "USDT": 0,
                "USDT_total": 0
            },
            "currency": {
                "id": 4,
                "type": 1,
                "iso3": "LTC",
                "decimal": 8,
                "link": "https://litecoin.org",
                "name": "LiteCoin",
                "time_create": 1515753200
            }
        },
        {
            "balance": "0",
            "balance_available": "0",
            "deposit_type": "margin",
            "type": 1,
            "balances": {
                "LTC": "0",
                "UAH": 0,
                "BTC": 0,
                "USDT": 0,
                "USDT_total": 0
            },
            "currency": {
                "id": 4,
                "type": 1,
                "iso3": "LTC",
                "decimal": 8,
                "link": "https://litecoin.org",
                "name": "LiteCoin",
                "time_create": 1515753200
            }
        },
        {
            "balance": "0",
            "balance_available": "0",
            "deposit_type": "spot",
            "type": 1,
            "balances": {
                "LTC": "0",
                "UAH": 0,
                "BTC": 0,
                "USDT": 0,
                "USDT_total": 0
            },
            "currency": {
                "id": 4,
                "type": 1,
                "iso3": "LTC",
                "decimal": 8,
                "link": "https://litecoin.org",
                "name": "LiteCoin",
                "time_create": 1515753200
            }
        },
        {
            "balance": "0",
            "balance_available": "0",
            "deposit_type": "funding",
            "type": 1,
            "balances": {
                "ADA": "0",
                "UAH": 0,
                "BTC": 0,
                "USDT": 0,
                "USDT_total": 0
            },
            "currency": {
                "id": 551,
                "type": 1,
                "iso3": "ADA",
                "decimal": 6,
                "link": "",
                "name": "Cardano",
                "time_create": 1562169255
            }
        },
        {
            "balance": "0",
            "balance_available": "0",
            "deposit_type": "margin",
            "type": 1,
            "balances": {
                "ADA": "0",
                "UAH": 0,
                "BTC": 0,
                "USDT": 0,
                "USDT_total": 0
            },
            "currency": {
                "id": 551,
                "type": 1,
                "iso3": "ADA",
                "decimal": 6,
                "link": "",
                "name": "Cardano",
                "time_create": 1562169255
            }
        },
        {
            "balance": "0",
            "balance_available": "0",
            "deposit_type": "spot",
            "type": 1,
            "balances": {
                "ADA": "0",
                "UAH": 0,
                "BTC": 0,
                "USDT": 0,
                "USDT_total": 0
            },
            "currency": {
                "id": 551,
                "type": 1,
                "iso3": "ADA",
                "decimal": 6,
                "link": "",
                "name": "Cardano",
                "time_create": 1562169255
            }
        }
    ],
    "withdraw_limits": {
        "total": "200000000",
        "remained": "200000000",
        "in_process": "0",
        "currency": "2"
    },
    "pnl": {
        "USDT": "4668581722",
        "BTC": "-148108"
    }
}