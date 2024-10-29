import { FC } from 'react'

import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import { IMenu } from './menu.interface'

interface IMenuPage {
	menu: IMenu
}

const Menu: FC<IMenuPage> = ({ menu: { items, title } }) => {
	return (
		<div className={styles.menu}>
			<div className={styles.heading}>{title}</div>
			<div className={styles.items}>
				{items.length ? (
					items.map(item => <MenuItem key={item.link} item={item} />)
				) : (
					<div>Элементы меню не найдены</div>
				)}
			</div>
		</div>
	)
}

export default Menu
