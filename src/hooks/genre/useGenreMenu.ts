import { useQuery } from '@tanstack/react-query'

import { IMenuItem } from '@/components/layout/sidebar/navigation/menu.interface'

import { PUBLIC_URL } from '@/config/url.config'

import { genreService } from '@/service/genre.service'

export const useGenreMenu = () => {
	const { data: genres, isLoading } = useQuery({
		queryKey: ['get genres for menu'],
		queryFn: () => genreService.getAll(),
		select: data =>
			data
				.map(
					genre =>
						({
							icon: genre.icon,
							link: PUBLIC_URL.genre(genre.slug),
							value: genre.name
						}) as IMenuItem
				)
				.splice(0, 4)
	})

	return { genres, isLoading }
}
