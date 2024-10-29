import { FC } from 'react'

import styles from './Header.module.scss'
import Search from './search/Search'
import UserMenu from './user-menu/UserMenu'

const Header: FC = () => {
	return (
		<div className={styles.wrapper}>
			<header className={styles.header}>
				<Search />
				<UserMenu />
			</header>
		</div>
	)
}

export default Header
