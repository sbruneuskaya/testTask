import React from "react";
import styles from './styles.module.scss'
import ServicesItem from "./services-item";

const Services = () => {
    return (
        <div className={styles.services}>
            <div className={styles.servicesDescription}>
                <p className={styles.title}>услуги</p>
                <p className={styles.subtitle}>Выполняем как комплексное обследование, так и отдельные виды работ</p>
            </div>
            <div className={styles.scroll}>
                <div className={styles.itemWrapper}>
                    <ServicesItem/>
                </div>
            </div>
        </div>
    )
}

export default Services;