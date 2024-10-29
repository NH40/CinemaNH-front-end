import { axiosWithAuth } from '@/api/interceptors'

import { API_URL } from '@/config/api.config'

import {
	IMiddleStatisticsResponse,
	IStatisticsItem
} from '@/types/statistics.types'

class StatisticsService {
	async getMain() {
		const { data } = await axiosWithAuth.get<IStatisticsItem[]>(
			API_URL.statistics('/main')
		)

		return data
	}

	async getMiddle() {
		const { data } = await axiosWithAuth.get<IMiddleStatisticsResponse>(
			API_URL.statistics('/middle')
		)

		return data
	}
}

export const statisticsService = new StatisticsService()
