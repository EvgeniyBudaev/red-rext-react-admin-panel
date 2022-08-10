import { FC } from 'react'
import {IViewByMonth} from "@/shared/interfaces/statistics.interface";

interface IViewsChartProps {
    data: IViewByMonth[]
}

const ViewsChart: FC<IViewsChartProps> = ({ data }) => {
    return (
        <div>ViewsChart</div>
    )
}

export default ViewsChart