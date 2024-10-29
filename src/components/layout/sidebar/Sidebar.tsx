import { FC } from 'react'

import styles from './Sidebar.module.scss'
import Subscribe from './Subscribe/Subscribe'
import HeaderLogo from './logo/HeaderLogo'
import MenuContainer from './navigation/MenuContainer'

const Sidebar: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.sidebar}>
				<HeaderLogo />
				<MenuContainer />
				<Subscribe />
			</div>
		</div>
	)
}

export default Sidebar
