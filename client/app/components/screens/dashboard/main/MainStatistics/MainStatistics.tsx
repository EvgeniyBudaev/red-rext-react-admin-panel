import { FC } from 'react'
import Heading from "@/ui/heading/Heading";
import StatisticItem from "@/ui/statistic-item/StatisticItem";
import {AiOutlineEye} from "react-icons/all";

const MainStatistics: FC = () => {
    return (
        <div>
            <Heading>Main Statistics</Heading>
            <div className="grid grid-cols-4 gap-8"></div>
            <StatisticItem item={{
                Icon: AiOutlineEye,
                name: 'Views',
                value: 2000000
            }} />
        </div>
    )
}

export default MainStatistics