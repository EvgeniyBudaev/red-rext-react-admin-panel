import {FC} from 'react'
import styles from './StatisticItem.module.scss'
import {IStatisticItem} from "@/ui/statistic-item/statistic-item.interface";

const StatisticItem: FC<{item: IStatisticItem}> = ({item}) => {
    return (
        <div className={styles.item}>
            <div className={styles.icon}>
                <item.Icon />
            </div>
            <div className={styles.name}>{item.name}</div>
            <div className={styles.value}>{item.value.toLocaleString('ru-Ru')}</div>
        </div>
    )
}

export default StatisticItem