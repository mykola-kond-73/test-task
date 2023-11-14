import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import cn from "classnames";

import styles from "./WalletOverview.module.sass";
import Wallet from "../../components/Wallet";
import Icon from "../../components/Icon";

import AssetBalances from "./AssetBalances";
import {fetchUserBalances} from "../../store/actions/User/FetchUserBalances";
import {getUserBalancesAll} from "../../store/utils/GetUserBalances";

const page = "wallet";

const WalletOverview = () => {
    /**
     *
     * @type {Dispatch<AnyAction>}
     */
    const dispatch = useDispatch();

    /**
     *
     */
    const {t} = useTranslation();

    /**
     *
     * @type {{}}
     */
    const walletNames = {
        spot: 'Spot',
    };

    /**
     * Get params from URL
     */
    let walletType = 'spot';

    /**
     * Get data from global store
     */
    const availableBalance = useSelector(state => state.user.available_balance);
    const balances = useSelector(getUserBalancesAll);
    const isBalanceShown = useSelector(state => state.user.isBalanceShown);

    console.log(availableBalance);

    /**
     * Local state
     */
    const [search, setSearch] = useState("");
    const [filteredWalletsList, setFilteredBalances] = useState(balances);
    const [walletName, setWalletName] = useState('');

    /**
     * @param e
     */
    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    // const handleShowHideBalance = () => {
    //     dispatch(switchIsBalanceShown());
    // }

    /**
     * Init on start
     */
    useEffect(() => {
        dispatch(fetchUserBalances());
    }, []);

    /**
     *
     */
    useEffect(() => {
        setWalletName(walletNames[walletType]);
    }, [walletType]);

    /**
     *
     */
    useEffect(() => {
        const filtered = Object.keys(balances)
            .sort((a, b) => {
                const compareResult = balances[b][walletType].total_available_num - balances[a][walletType].total_available_num

                if (compareResult === 0) {
                    return balances[b][walletType].total_available_usdt_num - balances[a][walletType].total_available_usdt_num
                }

                return compareResult;
            })
            .filter(key => key.toLowerCase().includes(search.trim().toLowerCase()))
            .reduce((obj, key) => {
                return {
                    ...obj,
                    [key]: balances[key][walletType]
                };
            }, {});

        setFilteredBalances(filtered);
    }, [JSON.stringify(balances), search, walletType]);

    /**
     * Check balances and display preloader
     */
    // if (Object.keys(balances).length === 0) {
    //    return <Loader />
    // }

    /**
     * Render and return HTML
     */
    return (
        <Wallet>
            <div className={styles.panel}>
                <div className={styles.top}>
                    <h4 className={cn("h4", styles.title)}>{walletName}</h4>
                    <div className={styles.line}>
                        <div className={styles.details}>
                            <div className={styles.info}>{t(`${page}.available`)}</div>
                            <div className={styles.currency}>
                                <div
                                    className={styles.number}>{isBalanceShown ? availableBalance[walletType].btc : '**********'}</div>
                                <div className={cn("category-green", styles.category)}>BTC</div>
                            </div>
                            <div
                                className={styles.price}>${isBalanceShown ? availableBalance[walletType].usdt : '******'}</div>
                        </div>
                        <div className={styles.wrap}>
                            <form
                                className={styles.form}
                                action=""
                                onSubmit={handleSubmit}
                            >
                                <input
                                    className={styles.input}
                                    type="text"
                                    value={search}
                                    onChange={handleChange}
                                    name="search"
                                    placeholder={t(`${page}.search`)}
                                    required
                                />
                                <button className={styles.result}>
                                    <Icon name="search" size="20"/>
                                </button>
                            </form>
                            {/* <button className={cn("button-black button-small", styles.button)} onClick={handleShowHideBalance}>
                             {isBalanceShown ? 'Hide' : 'Show'}
                             </button> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.list}>
                <div className={styles.item}>
                    <AssetBalances balanceData={filteredWalletsList} walletType={walletType}/>
                </div>
            </div>
        </Wallet>
    );
};

export default WalletOverview;
