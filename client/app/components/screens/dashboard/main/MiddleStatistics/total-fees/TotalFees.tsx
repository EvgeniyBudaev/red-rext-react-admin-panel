import { FC } from 'react'
import styles from './TotalFees.module.scss'
import {MdOutlineQueryStats} from "react-icons/md";
import ProgressBar from "@/ui/progress-bar/ProgressBar";
import AnimatedCounter from "@/ui/animated-counter/AnimatedCounter";

interface ITotalFeesProps {
    total: number;
}

const TotalFees: FC<ITotalFeesProps> = ({total}) => {
    return (
        <div className={styles.fees}>
            <ProgressBar percent={Math.round(total * 100 / 3000000000)} />
            <div className={styles.icon}>
                <MdOutlineQueryStats />
            </div>
            <div className={styles.name}>Total fees</div>
            $<AnimatedCounter from={5000000} to={total} />
        </div>
    )
}

export default TotalFees