import { useState } from 'react';
import { ReactComponent as Logo } from '../../../svg/tichtrakLogo.svg';
import { ReactComponent as Dropdown } from '../../../svg/dropdownArrow.svg';
import { ReactComponent as Overview } from '../../../svg/overview.svg';
import { ReactComponent as PriceTag } from '../../../svg/priceTag.svg';
import { ReactComponent as Manage } from '../../../svg/manage.svg';
import { ReactComponent as Transaction } from '../../../svg/transaction.svg';
import { ReactComponent as Categories } from '../../../svg/categories.svg';
import { ReactComponent as Settings } from '../../../svg/settings.svg';
import { ReactComponent as Help } from '../../../svg/helpcenter.svg';
import { ReactComponent as Logout } from '../../../svg/logout.svg';
import styles from '../sidebar/sidebar.module.scss';

const SideBar = () => {
    const [isRotated, setRotated] =  useState(false);

    const handleRotate = () => {
        setRotated(!isRotated);
    }

    return (
        <section className={styles.container}>
            <section>
                <section>
                    <div className={styles.info}>
                        <span><Logo width={55} height={55} /></span>
                        <span><h1>TichTrak</h1></span>
                    </div>
                    <div className={styles.info2}>
                        <div></div>
                        <span>
                            <h1>Blessing Adebiyi</h1>
                            <p>Admin</p>
                        </span>
                        <span className={styles.dropdown}><Dropdown /></span>
                    </div>
                </section>
                <hr />
                <section>
                    <div className={styles.icons}>
                        <h1>Main Menu</h1>
                        <div>
                            <span><Overview width={20} height={20} /></span>
                            <span><p>Overview</p></span>
                        </div>
                        <div>
                            <span><Manage width={20} height={20} /></span>
                            <span><p>Manage Institution</p></span>
                        </div>
                        <div>
                            <span><Transaction width={20} height={20} /></span>
                            <span><p>Transactions</p></span>
                        </div>
                        <div>
                            <span><PriceTag width={20} height={20} /></span>
                            <span><p>Pricing & Plans</p></span>
                        </div>
                        <div onClick={handleRotate}>
                            <span><Categories width={20} height={20} /></span>
                            <span><p>Categories</p></span>
                            <span className={styles.dropdown}><Dropdown className={`${isRotated ? styles.rotate : styles.station}`} /></span>
                        </div>
                        <ul className={`${isRotated ? styles.list : ''}`}>
                            <li>University</li>
                            <li>Polytechnic</li>
                            <li>College Of Education</li>
                            <li>Others</li>
                        </ul> 
                    </div>
                </section>
            </section>
            <section className={styles.icons}>
                <div>
                    <span><Settings width={20} height={20} /></span>
                    <span><p>Overview</p></span>
                </div>
                <div>
                    <span><Help width={20} height={20} /></span>
                    <span><p>Overview</p></span>
                </div>
                <div>
                    <span><Logout width={20} height={20} /></span>
                    <span><p>Overview</p></span>
                </div>
            </section>
        </section>
    )
}

export default SideBar;