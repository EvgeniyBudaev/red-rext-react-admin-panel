import { FC } from 'react'
import Layout from "@/ui/Layout/Layout";
import MainStatistics from "@/screens/dashboard/main/MainStatistics/MainStatistics";
import MiddleStatistics from "@/screens/dashboard/main/MiddleStatistics/MiddleStatistics";

const Dashboard: FC = () => {
    return (
        <Layout title='Dashboard'>
            <MainStatistics />
            <MiddleStatistics />
        </Layout>
    )
}

export default Dashboard