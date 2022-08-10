import instance from "../api/interceptor";
import {
    IMiddleStatisticsResponse,
    IStatisticItem
} from "@/shared/interfaces/statistics.interface";

export const StatisticsService = {
    async getMain() {
        return instance.get<IStatisticItem[]>(`/statistics/main`).then(({data}) => data)
    },

    async getMiddle() {
        return instance.get<IMiddleStatisticsResponse>(`/statistics/middle`).then(({data}) => data)
    },
}