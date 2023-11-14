const formatNumCurrency = (input, decimals) => (Number(input) / 10 ** 8).toFixed(decimals || 5);

export function prepareUserBalances(dispatch, data, getState) {
    const all_currency_flip = getState().config.all_currencies_flip;
    const currency_data = getState().config.currency_data;
    const currency_decimals = getState().config.currency_decimals;

    let tickers_balances = {};
    let total_balances = {
        total: {
            btc: data ? data.total.BTC ?? 0 : 0,
            usdt: data ? data.total.USDT ?? 0 : 0,
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
    }

    const usdtId = all_currency_flip['USDT'];
    const btcId = all_currency_flip['BTC'];

    if(data){
        for (const key in data.list) {
            const item = data.list[key];

            if (!item.hasOwnProperty('currency')) {
                return;
            }

            const iso3 = item.currency.iso3;
            if (!tickers_balances.hasOwnProperty(iso3)) {
                tickers_balances[iso3] = {
                    iso3: iso3,
                    currency: item.currency
                };
            }

            const type = item.deposit_type
            const coinId = all_currency_flip[iso3];

            if (!tickers_balances[iso3].hasOwnProperty(type)) {
                tickers_balances[iso3][type] = {
                    // decimal: currency_data[usdtId].decimal_rounding,
                    decimal: currency_data[coinId]?.decimal_rounding ?? currency_decimals[iso3],
                    decimal_rounding: currency_data[usdtId].decimal_rounding,

                    total_balance: formatNumCurrency(item.balance, currency_decimals[iso3]),
                    total_balance_usdt: (item.balances && 'USDT_total' in item.balances) ? formatNumCurrency(item.balances.USDT_total, currency_data[usdtId].decimal_rounding) : null,
                    total_balance_num: +(item.balance),
                    total_balance_usdt_num: (item.balances && 'USDT_total' in item.balances) && +(item.balances.USDT_total),

                    total_available: formatNumCurrency(item.balance_available, currency_decimals[iso3]),
                    total_available_usdt: (item.balances && 'USDT' in item.balances) ? formatNumCurrency(item.balances.USDT, currency_data[usdtId].decimal_rounding) : null,
                    total_available_num: +(item.balance_available),
                    total_available_usdt_num: +(item.balances.USDT),

                    frozen: formatNumCurrency(item.balance - item.balance_available, currency_decimals[iso3]),
                    frozen_usdt: (item.balances && 'USDT' in item.balances) ? formatNumCurrency(item.balances.USDT_total - item.balances.USDT, currency_data[usdtId].decimal_rounding) : null,
                }
            }

            if (total_balances[type] !== undefined) {
                total_balances[type] = {
                    btc: total_balances[type].btc + (item.balances.BTC === undefined ? 0 : Number(item.balances.BTC)),
                    usdt: total_balances[type].usdt + (item.balances.USDT === undefined ? 0 : Number(item.balances.USDT))
                };
            }
        }
    }

    for (let key in total_balances) {
        total_balances[key].btc = formatNumCurrency(total_balances[key].btc, currency_data[btcId].decimal_rounding);
        total_balances[key].usdt = formatNumCurrency(total_balances[key].usdt, currency_data[usdtId].decimal_rounding);
    }

    dispatch({
        type: 'SET_CURRENT_BALANCE_CONVERTED',
        payload: total_balances
    });

    dispatch({
        type: 'UPDATE_USER_BALANCES',
        payload: tickers_balances
    });

    dispatch({
        type: 'SET_CURRENT_BALANCE_PNL',
        payload: data ? data.pnl : 0
    });
}