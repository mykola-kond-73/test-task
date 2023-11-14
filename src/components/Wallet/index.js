import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import cn from "classnames";
import styles from "./Wallet.module.sass";

import Icon from "../Icon";

const page = 'wallet';

const Wallet = ({ className, children }) => {
    /**
     * @type {Dispatch<AnyAction>}
     */
    const dispatch = useDispatch();

    /**
     *
     */
    const { t } = useTranslation();

    /**
     * @type {[]}
     */
    const navigation = [
        {
            title: t(`${page}.navigation.0.title`),
            color: "#23262f",
            url: "/wallets",
            type: "spot"
        },
        {
            title: t(`${page}.navigation.1.title`),
            color: "#9757D7",
            url: "/wallets/margin",
            type: "margin"
        },
        {
            title: t(`${page}.navigation.2.title`),
            color: "#FFD166",
            // url: "/fiat-and-spot",
            url: "/wallets/funding",
            separator: true,
            type: "funding"
        },
    ];

    /**
     * Get available balance from state
     */
    const availableBalance = useSelector(state => state.user.available_balance);
    const isBalanceShown = useSelector(state => state.user.isBalanceShown);

    /**
     * Render HTML
     */
    return (
        <>
            <div className={cn(className, styles.wallet)}>
                <div className={styles.sidebar}>
                    <div className={cn(styles.group
                    )}>
                        <div className={styles.menu}>
                            {navigation.map((item, index) =>
                                // item.url ? (
                                <p
                                    className={cn(styles.item, {
                                        [styles.separator]: item.separator,
                                    })}
                                    activeClassName={styles.active}
                                    to={item.url}
                                    key={index}
                                    exact
                                >
                                    {item.color && (
                                        <div
                                            className={styles.bg}
                                            style={{ backgroundColor: item.color }}
                                        ></div>
                                    )}
                                    {item.icon && <Icon name={item.icon} size="20" />}
                                    {item.title}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.panel}>
                        <div className={styles.info}>{t(`${page}.totalAvailable`)}</div>
                        <div className={styles.currency}>
                            <div className={styles.number}>{isBalanceShown ? availableBalance.total.btc : '**********'}</div>
                            <div className={cn("category-green", styles.category)}>BTC</div>
                        </div>
                        <div className={styles.price}>${isBalanceShown ? availableBalance.total.usdt : '******'}</div>
                    </div>
                    <div className={styles.menuTop}>
                        {navigation.map((item, index) =>
                            <p
                                className={styles.item}
                                activeClassName={styles.active}
                                to={item.url}
                                key={index}
                                exact
                            >
                                <div className={styles.title}>
                                    {item.color && (
                                        <div
                                            className={styles.bg}
                                            style={{ backgroundColor: item.color }}
                                        ></div>
                                    )}
                                    {item.icon && <Icon name={item.icon} size="20" />}
                                    {item.title}
                                </div>
                                <span className={styles.balance}>${availableBalance[item.type].usdt}</span>
                            </p>
                        )}
                    </div>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Wallet;
