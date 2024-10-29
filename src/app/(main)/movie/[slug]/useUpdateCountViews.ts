import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'

import { movieService } from '@/service/movie.service'

export const useUpdateCountViews = (slug: string) => {
	const { mutateAsync } = useMutation({
		mutationKey: ['update count views'],
		mutationFn: () => movieService.updateCountViews(slug)
	})

	useEffect(() => {
		mutateAsync()
	}, [])
}
