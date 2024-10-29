import { FC } from 'react'

import Loader from '@/components/ui/Loader'

import styles from './TopMovies.module.scss'

const TopMoviesLoader: FC = ({}) => {
	return (
		<div className={styles.top_movies}>
			<div className='h-[390px] w-full flex items-center justify-center'>
				<Loader />
			</div>
		</div>
	)
}

export default TopMoviesLoader
