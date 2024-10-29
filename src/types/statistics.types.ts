export interface ITopMovie {
	title: string
	views: number
}

export interface ISalesByWeek {
	date: string
	total: number
}

export interface IMiddleStatisticsResponse {
	topMovies: ITopMovie[]
	salesByWeek: ISalesByWeek[]
}

export interface IStatisticsItem {
	id: number
	name: string
	value: number
}
