import React from "react";
import styles from './styles.module.scss'

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperImg}>
                <div className={styles.wrapperImgMenu}/>
                <div className={styles.wrapperImgLogo}/>
            </div>
            <div className={styles.wrapperContacts}>
                <div className={styles.wrapperContactsEmail}>
                    <p className={styles.wrapperContactsTitle}>Пишите нам на email</p>
                    <div className={styles.wrapperGroup}>
                        <div className={styles.wrapperContactsEmailImg}/>
                        <p className={styles.wrapperContactsText}>info@diagnistics.by</p>
                    </div>
                </div>
                <div className={styles.wrapperContactsPhone}>
                    <div className={styles.wrapperGroup}>
                        <div className={styles.wrapperContactsPhoneImg}/>
                        <p className={styles.wrapperContactsTitle}>Есть вопросы? Звоните!</p>
                    </div>
                    <p className={styles.wrapperContactsNumber}>+375 (29) 456-45-45</p>
                </div>
            </div>
        </div>
    )
}

export default Header;