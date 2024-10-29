'use client'

import { FC } from 'react'

import Heading from '@/components/ui/heading/Heading'

import { useMainStatistics } from '@/hooks/statistics/useMainStatistics'

import styles from './MainStatistics.module.scss'
import StatisticItem from './StatisticItem'
import StatisticItemLoader from './StatisticItemLoader'

const MainStatistics: FC = () => {
	const { mainStatistics, isLoading } = useMainStatistics()

	return (
		<div className={styles.wrapper}>
			<Heading>Статистика</Heading>
			<div className={styles.main_statistics}>
				{isLoading ? (
					Array.from({ length: 4 }).map((_, index) => (
						<StatisticItemLoader key={index} />
					))
				) : mainStatistics ? (
					mainStatistics.map(item => (
						<StatisticItem key={item.id} item={item} />
					))
				) : (
					<div>Нету данных для статистики</div>
				)}
			</div>
		</div>
	)
}

export default MainStatistics
