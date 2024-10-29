import { useQuery } from '@tanstack/react-query'

import { userService } from '@/service/user.service'

export const useProfile = () => {
	const { data: user, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.getProfile(),
		select: ({ data }) => data
	})

	return { user, isLoading }
}
