import { FC } from 'react'

import SkeletonLoader from '@/components/ui/SkeletonLoader'

import { useGenreMenu } from '@/hooks/genre/useGenreMenu'

import Menu from '../Menu'

const GenreMenu: FC = () => {
	const { genres, isLoading } = useGenreMenu()

	return isLoading ? (
		<div className='space-y-3'>
			{Array.from({ length: 4 }).map((_, index) => (
				<SkeletonLoader className='h-10 mx-4 mt-2' key={index} />
			))}
		</div>
	) : (
		<Menu menu={{ items: genres || [], title: 'Популярные жанры' }} />
	)
}

export default GenreMenu
