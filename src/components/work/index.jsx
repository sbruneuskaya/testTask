import React from "react";
import styles from './styles.module.scss'

const Work = () => {
    return (
        <>
            <div className={styles.description}>
                <p className={styles.title}>Мы работаем в комплексе</p>
                <p className={styles.subtitle}>чтобы Вы не тратили время на поиск и организацию множества
                    подрядчиков</p>
            </div>
            <div className={styles.workBox}>
                <div className={styles.workImg}/>
                <div className={styles.workInfo}>
                    <div className={styles.workInfoStep}>
                        <p className={styles.workInfoTitle}>
                            <span>шаг №1. </span>
                            Подготовительные работы
                        </p>

                        <p className={styles.workInfoSubtitle}>Мы осматриваем здание, делаем замеры и проверяем наличие
                            визуально заметных дефектов: трещин,
                            коррозии, повреждения фундамента и т.д.
                        </p>
                    </div>
                    <div className={styles.workInfoStepSecond}>
                        <div className={styles.workInfoCircle}>
                            <div className={styles.workInfoImg}/>
                        </div>
                        <div className={styles.workInfoText}>
                            <p className={styles.workInfoTextTitle}>“Задача этого этапа получить максимально полное
                                представление о конструкции здания, условиях его эксплуатации и возможных слабых
                                местах“</p>
                            <p className={styles.workInfoTextSubtitle}>Алексей, обследователь и главный инженер
                                проектов</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work;