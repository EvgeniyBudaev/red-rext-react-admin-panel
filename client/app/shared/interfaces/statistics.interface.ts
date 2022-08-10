export interface IStatisticItem {
    id: number;
    name: string;
    value: number;
}

export interface IViewByMonth {
    views: string;
    month: Date;
}

export interface IMiddleStatisticsResponse {
    totalFees: number;
    viewsByMonth: IViewByMonth[];
}