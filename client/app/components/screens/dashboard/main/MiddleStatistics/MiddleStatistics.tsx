import { FC } from 'react'
import Heading from "@/ui/heading/Heading";
import {useQuery} from "@tanstack/react-query";
import {StatisticsService} from "@/services/statistics.service";
import Loader from "@/ui/Loader/Loader";
import TotalFees from "@/screens/dashboard/main/MiddleStatistics/total-fees/TotalFees";
import ViewsChart from "@/screens/dashboard/main/MiddleStatistics/views-chart/ViewsChart";
import styles from './MiddleStatistics.module.scss'

const MiddleStatistics: FC = () => {
    const {data, isLoading} = useQuery(['get middle statistics'], () => StatisticsService.getMiddle())

    return (
        <div className='mt-14'>
            <Heading>Middle Statistics</Heading>
            {isLoading ? <Loader /> : data ? (
                <div className={styles.wrapper}>
                    <TotalFees total={data.totalFees} />
                    <ViewsChart data={data.viewsByMonth} />
                </div>
            ) : <div>Statistics not found</div>}
        </div>
    )
}

export default MiddleStatistics