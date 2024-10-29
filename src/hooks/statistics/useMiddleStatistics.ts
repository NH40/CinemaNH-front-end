import { useQuery } from '@tanstack/react-query'

import { statisticsService } from '@/service/statistics.service'

export const useMiddleStatistics = () => {
	const { data: middleStatistics, isLoading } = useQuery({
		queryKey: ['get middle statistics'],
		queryFn: () => statisticsService.getMiddle()
	})

	return { middleStatistics, isLoading }
}
