import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { PUBLIC_URL } from '@/config/url.config'

import { IMovie } from '@/types/movie.types'

import styles from './SearchList.module.scss'

interface ISearchList {
	movies: IMovie[]
}

const SearchList: FC<ISearchList> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map(movie => (
					<Link
						key={movie.id}
						href={PUBLIC_URL.movie(movie.slug)}
						className={styles.item}
					>
						<Image
							src={movie.poster}
							alt={movie.title}
							width={70}
							height={80}
							objectFit='cover'
							objectPosition='top'
							className={styles.image}
						/>
					</Link>
				))
			) : (
				<div className={styles.notFound}>Фильмы не найдены!</div>
			)}
		</div>
	)
}

export default SearchList
