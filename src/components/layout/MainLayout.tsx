import { FC, PropsWithChildren } from 'react'

import styles from './MainLayout.module.scss'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'

const MainLayout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<aside className='flex-1'>
				<Header />
				<Sidebar />
				<main>{children}</main>
			</aside>
		</div>
	)
}

export default MainLayout
