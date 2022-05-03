import React, {useEffect, useRef} from "react";
import styles from './styles.module.scss'
import Data from "./data";


const ServicesItem = () => {
    let ref = useRef();
    useEffect(() => {
        const elem = ref.current
        if (elem) {
            const onWheel = e => {
                e.preventDefault();
                elem.scrollTo({
                    left: elem.scrollLeft + e.deltaY * 5,
                    behavior: 'smooth'
                })
            }
            elem.addEventListener('wheel', onWheel)
            return () => elem.removeEventListener('wheel', onWheel)
        }
    }, [])
    return (
        <div ref={ref} className={styles.itemWrapper}>
            {Data.map((el) => {
                return (
                    <div className={styles.item}>
                        <div>
                            <div style={{
                                background: `url(${el.img})`,
                                width: "400px",
                                height: "162px",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: `${el.position}`
                            }} className={styles.itemLogo}/>
                            <div className={styles.itemBoxText}>
                                <p className={styles.title}>{el.title}</p>
                                <p className={styles.subtitle}>{el.subtitle}</p>
                            </div>
                        </div>
                        <a href="/">подробнее
                            <div className={styles.itemArrow} />
                        </a>
                    </div>
                )
            })}
        </div>
    )
}

export default ServicesItem;