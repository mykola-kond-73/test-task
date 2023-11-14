import { createSelector } from 'reselect';

const selectUser = state => state.user

export const getUserBalances = createSelector(
    selectUser,
    (user, ticker) => ticker,
    (user, ticker, type = null) => type,
    (user, ticker, type = null) => {
        if (type === null) {
            return user.user_balances[ticker];
        } else {
            return user.user_balances[ticker][type];
        }
    }
)

export const getUserBalancesAll = createSelector(
    selectUser,
    user => user.user_balances,
)