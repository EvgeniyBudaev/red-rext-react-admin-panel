import { FC } from 'react'
import {BarElement, CategoryScale, Chart as ChartJS, LinearScale, Tooltip} from 'chart.js'
import {Bar} from 'react-chartjs-2'
import {IViewByMonth} from "@/shared/interfaces/statistics.interface";
import {options} from "@/screens/dashboard/main/MiddleStatistics/views-chart/chart.options";
import styles from './ViewsChart.module.scss'

interface IViewsChartProps {
    data: IViewByMonth[]
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip)

const ViewsChart: FC<IViewsChartProps> = ({data}) => {
    return (
        <div className={styles.chart}>
            <Bar options={options as any} data={{
                labels: data.map(item => item.month),
                datasets: [
                    {
                        label: 'Dataset 1',
                        data: data.map(item => item.views),
                        backgroundColor: '#7A94FE'
                    }
                ]
            }} />
        </div>
    )
}

export default ViewsChart