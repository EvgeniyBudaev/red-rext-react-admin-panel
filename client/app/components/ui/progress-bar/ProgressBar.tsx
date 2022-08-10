import { FC } from 'react'
import styles from './ProgressBar.module.scss'
import {useProgressAnimate} from "@/hooks/useProgressAnimate";
import {motion} from 'framer-motion'

interface IProgressBarProps {
    percent: number;
}

const ProgressBar: FC<IProgressBarProps> = ({percent}) => {
    const {variants} = useProgressAnimate(percent)

    return (
        <div className={styles.progress}>
            <div className={styles.overflow}>
                <motion.div className={styles.bar} {...variants}></motion.div>
            </div>
            <span className={styles.percent}>{percent}%</span>
        </div>
    )
}

export default ProgressBar