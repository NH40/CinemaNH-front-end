import { FC } from 'react'

import MainStatistics from '@/components/ui/admin/admin-statiistics/main-statistics/MainStatistics'
import MiddleStatistics from '@/components/ui/admin/admin-statiistics/middle-statistics/MiddleStatistics'

import styles from './Manage.module.scss'

const Manage: FC = () => {
	return (
		<div className={styles.manage}>
			<MainStatistics />
			<MiddleStatistics />
		</div>
	)
}

export default Manage
