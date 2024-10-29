'use client'

import { FC } from 'react'

import { useMiddleStatistics } from '@/hooks/statistics/useMiddleStatistics'

import styles from './MiddleStatistics.module.scss'
import SalesChart from './sales-chart/SalesChart'
import SalesChartLoader from './sales-chart/SalesChartLoader'
import TopMovies from './top-movies/TopMovies'
import TopMoviesLoader from './top-movies/TopMoviesLoader'

const MiddleStatistics: FC = () => {
	const { middleStatistics, isLoading } = useMiddleStatistics()

	if (isLoading)
		return (
			<div className={styles.wrapper}>
				<div className={styles.top_movies}>
					<TopMoviesLoader />
				</div>
				<div className={styles.sales_chart}>
					<SalesChartLoader />
				</div>
			</div>
		)

	return (
		<div className={styles.wrapper}>
			{middleStatistics ? (
				<>
					<div className={styles.top_movies}>
						<TopMovies data={middleStatistics.topMovies} />
					</div>
					<div className={styles.sales_chart}>
						<SalesChart data={middleStatistics.salesByWeek} />
					</div>
				</>
			) : (
				<div>Нету данных для статистики</div>
			)}
		</div>
	)
}
export default MiddleStatistics
