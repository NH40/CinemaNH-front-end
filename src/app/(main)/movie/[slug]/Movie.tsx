'use client'

import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

import Banner from '@/components/ui/banner/Banner'
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'

import { IMovie } from '@/types/movie.types'

import SimilarMovies from './SimilarMovies'
import Content from './content/Content'
import Reviews from './reviews/Reviews'
import { useUpdateCountViews } from './useUpdateCountViews'
import VideoPlayer from './video-player/VideoPlayer'
import { movieService } from '@/service/movie.service'

interface IMovieProps {
	initialMovie: IMovie
	similarMovies: IGalleryItem[]
	slug?: string
}

const Movie: FC<IMovieProps> = ({ initialMovie, similarMovies, slug = '' }) => {
	const { data: movie } = useQuery({
		queryKey: ['get movie', initialMovie],
		queryFn: () => movieService.getBySlug(slug),
		initialData: initialMovie,
		enabled: !!slug
	})

	useUpdateCountViews(movie.slug)

	return (
		<div>
			<Banner
				image={movie.bigPoster}
				Detail={() => <Content movie={movie} />}
			/>

			<div className='px-6 mb-10'>
				<VideoPlayer videoSource={movie.videoUrl} />

				<SimilarMovies similarMovies={similarMovies} />

				<Reviews movieId={movie.id} reviews={movie.reviews} />
			</div>
		</div>
	)
}

export default Movie
