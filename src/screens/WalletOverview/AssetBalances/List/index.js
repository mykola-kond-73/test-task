import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import toast from "react-hot-toast";

import styles from "./List.module.sass";
import cn from "classnames";

import { CaretDownCircle, CaretUpCircle, SyncCircle } from 'react-ionicons'
import { useTranslation } from "react-i18next";

const List = ({
    id,
    icon,
    balanceData,
    walletType,
    setCurrencyId,
    openDeposit,
    openWithdrawModal,
    setVisibleTransfer,
    setVisibleHistory
}) => {
    const { t } = useTranslation();

    const isBalanceShown = useSelector(state => state.user.isBalanceShown);

    return (
        <div className={styles.row} >
            <div className={cn(styles.col)}>
                <div
                    className={cn(styles.flex)}
                    onClick={() => {
                        setCurrencyId(id);
                        setVisibleHistory(prev => !prev);
                    }}>
                    <div className={styles.icon}>
                        <img loading="lazy" src={icon} alt={id} />
                    </div>
                    <div className={styles.details}>
                        <span className={styles.subtitle}>{id}</span>
                    </div>
                </div>
            </div>
            <div className={styles.col}>
                {isBalanceShown ? balanceData.total_balance : '********'}
                <p className={styles.value}> ${isBalanceShown ? balanceData.total_balance_usdt : '****'}</p>
            </div>
            <div className={styles.col}>
                {isBalanceShown ? balanceData.total_available : '********'}
                <p className={styles.value}> ${isBalanceShown ? balanceData.total_available_usdt : '****'}</p>
            </div>
            <div className={styles.col}>
                {isBalanceShown ? balanceData.frozen : '********'}
                <p className={styles.value}> ${isBalanceShown ? balanceData.frozen_usdt : '****'}</p>
            </div>
            <div className={styles.col}>
                <div className={styles.currency}>
                    {walletType !== 'margin' ? <button
                        // to={`/deposit/crypto/${id}`}
                        type="button"
                        className={cn(styles.item, styles.main)}
                        onClick={() => { openDeposit(id) }}
                    >
                        <CaretDownCircle
                            color={'#fff'}
                            height="20px"
                            width="20px"
                        />
                        <p className="px-3">{t(`wallet.btns.deposit`)}</p>
                    </button> : null}
                    {walletType !== 'margin' ? <button
                        className={styles.item}
                        type="button"
                        onClick={() => openWithdrawModal(id)}
                    >
                        <CaretUpCircle
                            color={'#fff'}
                            height="20px"
                            width="20px"
                        />
                        <p className="px-3">{t(`wallet.btns.withdraw`)} </p>
                    </button> : null}
                    <span className={styles.item} onClick={() => {
                        setCurrencyId(id);
                        setVisibleTransfer(prev => !prev);
                    }}>
                        <SyncCircle
                            color={'#fff'}
                            height="18px"
                            width="18px"
                        />
                        <p className="px-3">{t(`wallet.btns.transfer`)} </p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default List;