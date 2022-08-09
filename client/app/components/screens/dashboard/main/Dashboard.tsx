import { FC } from 'react'
import Layout from "@/ui/Layout/Layout";
import MainStatistics from "@/screens/dashboard/main/MainStatistics/MainStatistics";

const Dashboard: FC = () => {
    return (
        <Layout title='Dashboard'>
            <MainStatistics />
        </Layout>
    )
}

export default Dashboard