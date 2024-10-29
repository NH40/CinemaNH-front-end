'use client'

import { usePathname } from 'next/navigation'
import { FC } from 'react'

import { ADMIN_URL } from '@/config/url.config'

import { adminMenu, userMenu } from '@/constants/menu.data'

import Menu from './Menu'
import styles from './Menu.module.scss'
import GenreMenu from './genre-navigation/GenreMenu'

const MenuContainer: FC = () => {
	const pathname = usePathname()
	const isAdmin = pathname?.includes(ADMIN_URL.root())

	return (
		<div className={styles.menuContainer}>
			<Menu menu={isAdmin ? adminMenu : userMenu} />
			{!isAdmin && <GenreMenu />}
		</div>
	)
}

export default MenuContainer
