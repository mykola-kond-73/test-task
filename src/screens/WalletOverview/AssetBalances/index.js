import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { ListCircle, Albums } from 'react-ionicons'
import { Link, useHistory } from "react-router-dom";
import toast from "react-hot-toast";

import styles from "./AssetBalances.module.sass";

import Icon from "../../../components/Icon";
import List from "./List";

import Checkbox from "../../../components/Forms/Checkbox";
import { fetchUserBalances } from "../../../store/actions/User/FetchUserBalances";

const page = "wallet.assetBalances";

const SORTING_FUNCTIONS = {
    'ascending': (a, b, prop) => {
        if (prop === 'name') {
            if (a[prop] > b[prop]) {
                return 1;
            }
            if (a[prop] < b[prop]) {
                return -1;
            }
            return 0;
        } else {
            return Number(a[prop]) - Number(b[prop]);
        }
    },
    'descending': (a, b, prop) => {
        if (prop === 'name') {
            if (a[prop] < b[prop]) {
                return 1;
            }
            if (a[prop] > b[prop]) {
                return -1;
            }
            return 0;
        } else {
            return Number(b[prop]) - Number(a[prop]);             
        }
    },
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
    <button {...props}>{children}</button>
);

const settings = {
    lazyLoad: 'progressive',
    infinite: true,
    variableWidth: true,
    adaptiveHeight: true,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        }
    ],

    nextArrow: (
        <SlickArrow>
            <Icon name="arrow-next" size="18" />
        </SlickArrow>
    ),
    prevArrow: (
        <SlickArrow>
            <Icon name="arrow-prev" size="18" />
        </SlickArrow>
    ),
};

/**
 *
 * @param balanceData
 * @param walletType
 * @returns {JSX.Element}
 * @constructor
 */
const AssetBalances = ({ balanceData, walletType }) => {
    /**
     *
     */
    const { t } = useTranslation();

    /**
     * @type {History<LocationState>}
     */
    const history = useHistory();

    /**
     * @type {Dispatch<AnyAction>}
     */
    const dispatch = useDispatch();

    /**
     * @type {string}
     */
    const storedHideSmallBalance = localStorage.getItem('hideSmallBalances') || false;

    /**
     * Get data from global store
     */
    const all_icon = useSelector(state => state.config.all_icon);
    const accountInfo = useSelector(state => state.user.account_info);
    const verificationData = useSelector(state => state.user.verification_data);
    const currency_data = useSelector(state => state.config.currency_data);
    const all_currencies_flip = useSelector(state => state.config.all_currencies_flip);
    const smallBalances = useSelector(state => state.user.smallBalances);
    const accountSetting = useSelector(state => state.user.accountSettings);

    /**
     *
     */
    const [type, setType] = React.useState("list");
    const [currencyId, setCurrencyId] = useState('USDT');
    const [visibleWithdraw, setVisibleWithdraw] = useState(false);
    const [visibleTransfer, setVisibleTransfer] = useState(false);
    // const [visibleDeposit, setVisibleDeposit] = useState(false);
    const [visibleHistory, setVisibleHistory] = useState(false);
    const [hideSmallBalance, setHideSmallBalance] = useState(smallBalances.hide);
    const [sorting, setSorting] = useState({ prop: 'total_available_usdt_num', descending: true });
    const [sortingByNameHelper, setSortingByNameHelper]=useState(true)
    const [sortingByBalance,setSortingByBalance]=useState(false)
    const [isSortByAlphabetically,setIsSortByAlphabetically]=useState(false)
    const [sortedBalanceData, setSortedBalanceData] = useState({});

    /**
     * @type {{component: (function(*): *)}}
     */
    const verificationRequiredToast = {
        component: (text) => (
            <div>
                <p style={{ marginBottom: '8px' }}>
                    {text}&nbsp;
                </p>
                <Link
                    to="/verification"
                    className={styles.linkToast}
                    onClick={() => { toast.dismiss('verification_required') }}
                >
                    {t(`wallet.verificationReqLink`)}
                </Link>
            </div>
        ),
    }

    /**
     *
     * @param id
     */
    const openWithdrawModal = (id) => {
        if (verificationData?.verification?.status !== 2) {
            toast.error(
                verificationRequiredToast.component(t(`wallet.verificationReqWithdraw`)),
                { id: 'verification_required2', duration: 5000 }
            )
        } else if (Object.values(currency_data[all_currencies_flip[id]]?.networks ?? {})?.[0]?.is_withdraw_on === false) {
            toast.error(
                t(`wallet.disabledWithdraw`),
                { id: 'disabled2', duration: 5000 }
            )
        } else if (accountInfo.profile.is_suspended) {
            toast.error(
                t(`toast.errorCode.367`),
                { id: 'disabled2', duration: 5000 }
            )
        } else {
            setCurrencyId(id);
            setVisibleWithdraw(prev => !prev);
        }
    }

    const openDeposit = (id) => {
        if (verificationData?.verification?.status !== 2) {
            toast.error(
                verificationRequiredToast.component(t(`wallet.verificationReqDeposit`)),
                { id: 'verification_required1', duration: 5000 }
            )
        } else if (Object.values(currency_data[all_currencies_flip[id]]?.networks ?? {})?.[0]?.is_deposit_on === false) {
            toast.error(
                t(`wallet.disabledDeposit`),
                { id: 'disabled1', duration: 5000 }
            )
        } else if (accountInfo.profile.is_suspended) {
            toast.error(
                t(`toast.errorCode.367`),
                { id: 'disabled1', duration: 5000 }
            )
        } else {
            history.push(`/deposit/crypto/${id}`);
        }
    }

    const handleSort = (prop) => {
        if(prop==="name"){
            setSorting({ prop, descending: sortingByNameHelper })
            setSortingByNameHelper(!sortingByNameHelper)
            setSortingByBalance(true)
        }
        else{
            setSorting({ prop, descending: sortingByBalance })
            setSortingByBalance(!sortingByBalance)
            setSortingByNameHelper(true)
        } 
    }

    const checkClassName = (prop) => {
        return (sorting.prop === prop) ? (sorting.descending ? 'up' : 'down') : ''
    }

    /**
     * Handle hide small balances
     */
    const handleHideSmallBalances = () => {
        const shouldHide = !hideSmallBalance;

        dispatch({
            type: 'SET_HIDE_SMALL_BALANCES',
            payload: {
                hide: shouldHide,
                type: walletType
            }
        });

        dispatch(fetchUserBalances({
            hide_small_balances: Number(shouldHide)
        }));

        setHideSmallBalance(shouldHide);
    }

    /**
     *
     */
    useEffect(() => {
        const hide = Boolean(Number(accountSetting ? accountSetting.is_small_balances_hidden : storedHideSmallBalance));

        if (hide) {
            setHideSmallBalance(hide);

            dispatch({
                type: 'SET_HIDE_SMALL_BALANCES',
                payload: {
                    hide: hide,
                    type: walletType
                }
            });
        }
    }, [accountSetting]);

    /**
     *
     */
    useEffect(() => {
        if (balanceData) {
            setSortedBalanceData(
                Object.keys(balanceData).sort((a, b) => {
                    const prev = (sorting.prop === 'name') ? { ...balanceData[b], name: b } : balanceData[a];
                    const next = (sorting.prop === 'name') ? { ...balanceData[a], name: a } : balanceData[b];

                    const compareResult = SORTING_FUNCTIONS.descending(prev, next, 'total_available_num')

                    if (compareResult === 0) {
                        return SORTING_FUNCTIONS.descending(prev, next, 'total_available_usdt_num')
                    }

                    return compareResult;
                })
            )
        }
    }, [balanceData]);

    /**
     * Render HTML
     */
    return (
        <>
            <div className={styles.head}>
                <div className={styles.headrow}>
                    <p>{t(`${page}.title`)}</p>
                    <Checkbox
                        name="allow_read"
                        classNameRow={styles.checkbox}
                        value={hideSmallBalance}
                        checked={hideSmallBalance}
                        onChange={() => handleHideSmallBalances()}
                        content={t(`${page}.hideSmallBalances`)}
                    />
                </div>
                <div>
                    <ListCircle
                        color={type === "list" ? '#2C93FB' : '#9396B9'}
                        height="25px"
                        width="25px"
                        style={{ cursor: 'pointer' }}
                        onClick={() => { setType("list") }}
                    />
                    <Albums
                        color={type === "cards" ? '#2C93FB' : '#9396B9'}
                        height="25px"
                        width="25px"
                        style={{ cursor: 'pointer' }}
                        onClick={() => { setType("cards") }}
                    />
                </div>
            </div>

            {/** Check balances and display not found **/}
            {!Object.keys(balanceData).length ? (
                <div className={styles.not_found}>
                    <h2 className={styles.info}>
                        {t(`${page}.notFound`)}
                    </h2>
                </div>
            ) : (
                <div className={styles.wrap}>
                    {
                        <div className={styles.trade}>
                            <div className={styles.table}>
                                <div className={styles.row}>
                                    <div className={styles.col}>
                                        <div
                                            className={`sorting ${checkClassName('name')} `}
                                            onClick={() =>{ 
                                                setIsSortByAlphabetically(true)            
                                                handleSort('name')
                                            }}
                                        >
                                            {t(`${page}.sorting.coin`)}
                                        </div>
                                    </div>

                                    <div className={styles.col}>
                                        <div
                                            className={`sorting ${checkClassName('total_balance')}`}
                                            onClick={() =>{
                                                setIsSortByAlphabetically(false)            
                                                handleSort('total_balance_usdt_num')
                                            }}
                                        >
                                            {t(`${page}.sorting.totalBalance`)}
                                        </div>
                                    </div>
                                    <div className={styles.col}>
                                        <div
                                            className={`sorting ${checkClassName('total_available')}`}
                                            onClick={() =>{
                                                setIsSortByAlphabetically(false)            
                                                handleSort('total_available_usdt_num')
                                            }}

                                        >
                                            {t(`${page}.sorting.totalAvailable`)}
                                        </div>
                                    </div>
                                    <div className={styles.col}>
                                        <div
                                            className={`sorting ${checkClassName('frozen')}`}
                                            // onClick={() => handleSort('frozen')}
                                            onClick={() =>{
                                                setIsSortByAlphabetically(false)            
                                                handleSort('frozen_usdt')
                                            }}
                                        >
                                            {t(`${page}.sorting.frozen`)}
                                        </div>
                                    </div>

                                    <div className={styles.col}>
                                        <div>
                                            {t(`${page}.sorting.action`)}
                                            <Icon name="chart" size="20" />
                                        </div>
                                    </div>
                                </div>

                                {Object.keys(balanceData)
                                    .sort((a, b) => {
                                        const prev = (sorting.prop === 'name') ? { ...balanceData[b], name: b } : balanceData[a];
                                        const next = (sorting.prop === 'name') ? { ...balanceData[a], name: a } : balanceData[b];
                                        return (
                                            (sorting.descending) ?
                                                SORTING_FUNCTIONS.descending(prev, next, sorting.prop) :
                                                SORTING_FUNCTIONS.ascending(prev, next, sorting.prop)
                                        )
                                    })
//=====================SOLUTION=====================================================================================================================================
                                    .sort((a,b)=>{
                                        const prev = { ...balanceData[b], name: b }
                                        const next = { ...balanceData[a], name: a }

                                        if(!isSortByAlphabetically && Number(prev[sorting.prop])===0 && Number(next[sorting.prop])===0){
                                            if (prev['name'] < next['name']) {
                                                return 1;
                                            }
                                            if (prev['name'] > next['name']) {
                                                return -1;
                                            }
                                            return 0;
                                        }
                                    })
//=====================SOLUTION=====================================================================================================================================
                                    .map((x, index) => {
                                        return (
                                            <List
                                                key={index}
                                                id={x}
                                                // icon={all_icon[x]}
                                                walletType={walletType}
                                                balanceData={balanceData[x]}
                                                setCurrencyId={setCurrencyId}
                                                openDeposit={openDeposit}
                                                openWithdrawModal={openWithdrawModal}
                                                setVisibleTransfer={setVisibleTransfer}
                                                setVisibleHistory={setVisibleHistory}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }
                </div>
            )}

        </>
    );
};

export default AssetBalances;
