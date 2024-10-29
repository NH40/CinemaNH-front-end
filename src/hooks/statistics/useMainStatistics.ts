import { useQuery } from '@tanstack/react-query'

import { statisticsService } from '@/service/statistics.service'

export const useMainStatistics = () => {
	const { data: mainStatistics, isLoading } = useQuery({
		queryKey: ['get main statistics'],
		queryFn: () => statisticsService.getMain()
	})

	return { mainStatistics, isLoading }
}
