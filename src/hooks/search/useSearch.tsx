import { useQuery } from '@tanstack/react-query'
import { ChangeEvent, useState } from 'react'

import { useDebounce } from '../useDebounce'

import { movieService } from '@/service/movie.service'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const { isSuccess, data } = useQuery({
		queryKey: ['search movie list', debouncedSearch],
		queryFn: () => movieService.getAll(debouncedSearch),
		enabled: !!debouncedSearch
	})

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value)
	}

	return { isSuccess, data, handleSearch, searchTerm }
}
