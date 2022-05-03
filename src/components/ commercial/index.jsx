import React from "react";
import styles from './styles.module.scss'

const Commercial = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <div className={styles.infoText}>
                    <p className={styles.infoTitle}>Независимое обследование
                        зданий и сооружений</p>
                    <p className={styles.infoSubtitle}>антенн, труб, теплосетей, канализаций
                        и других объектов строительства</p>
                </div>
                <div className={styles.infoButton}>
                    <div className={styles.infoButtonGet}>
                        <div className={styles.infoButtonImg} />
                        <p className={styles.infoButtonText}>получить коммерческое</p>
                    </div>
                    <p className={styles.infoButtonDescription}>Отправьте техзадание и получите коммерческое предложение
                        в течении 15 минут на свой email или в мессенджер</p>
                </div>
            </div>
            <div className={styles.points}>
                <div className={styles.pointsItems}>
                    <div className={styles.pointsItem}>
                        <div className={styles.pointsItemImg}/>
                        <div className={styles.pointsItemText}>Начинаем работать без аванса</div>
                    </div>
                    <div className={styles.pointsItem}>
                        <div className={styles.pointsItemImg}/>
                        <div className={styles.pointsItemText}>Предоставляем отсрочку платежа</div>
                    </div>
                    <div className={styles.pointsItem}>
                        <div className={styles.pointsItemImg}/>
                        <div className={styles.pointsItemText}>Всегда называем справедливую цену</div>
                    </div>
                </div>
                <div className={styles.pointsAnimation}>
                    <div className={styles.pointsAnimationCircle}>
                        <div className={styles.pointsAnimationVideo}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Commercial;