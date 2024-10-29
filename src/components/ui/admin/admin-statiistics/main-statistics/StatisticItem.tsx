import { FC } from 'react'
import CountUp from 'react-countup'

import { IStatisticsItem } from '@/types/statistics.types'

import { getIcon } from '@/utils/statistics/statistics.util'

import styles from './MainStatistics.module.scss'

interface IStatisticItem {
	item: IStatisticsItem
}

const StatisticItem: FC<IStatisticItem> = ({ item }) => {
	const Icon = getIcon(item.id)
	return (
		<div className={styles.item}>
			<div className={styles.header}>
				<p className={styles.name}>{item.name}</p>
				<Icon className={styles.icon} />
			</div>
			<h2 className={styles.value}>
				<CountUp end={item.value} />
			</h2>
		</div>
	)
}

export default StatisticItem
