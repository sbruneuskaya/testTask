import React from "react";
import styles from './styles.module.scss'

const Benefit = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.wrapperDescription}>
                    <div className={styles.wrapperText}>
                        <p className={styles.wrapperTitle}>Мы работаем быстро <br></br>
                            и наши отчеты проходят согласование с первого раза</p>
                        <p className={styles.wrapperSubtitle}>Над вашим объектом работает целая команда: <br></br>
                            3 ГИПа (главных инженеров проектов) с опытом работы <br></br> от 6 лет и 2 штатных
                            сотрудника для камеральных работ
                        </p>
                    </div>
                </div>
                <div className={styles.wrapperBenefits}>
                    <ul className={styles.wrapperBenefitsTitle}>Вы и Ваши архитекторы получаете:
                        <li className={styles.wrapperBenefitsDescription}>
                            <div className={styles.wrapperBenefitsImg}/>
                            Отчет на который на 100% можно положиться
                        </li>
                        <li className={styles.wrapperBenefitsDescription}>
                            <div className={styles.wrapperBenefitsImg}/>
                            Экономию времени и прогнозируемость сроков
                        </li>
                        <li className={styles.wrapperBenefitsDescription}>
                            <div className={styles.wrapperBenefitsImg}/>
                            Предварительные результаты сразу на месте
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.containerImg}/>
        </div>
    )
}

export default Benefit;