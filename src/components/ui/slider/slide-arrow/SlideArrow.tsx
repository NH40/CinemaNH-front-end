import cn from 'clsx'
import { FC } from 'react'

import { Icon } from '../../Icon'

import styles from './SlideArrow.module.scss'

type arrowVariable = 'left' | 'right'

interface ISlideArrow {
	variant: arrowVariable
	clickHandler: () => void
}

const SlideArrow: FC<ISlideArrow> = ({ variant, clickHandler }) => {
	const isLeft = variant === 'left'

	return (
		<button
			onClick={clickHandler}
			className={cn(styles.arrow, {
				[styles.left]: isLeft,
				[styles.right]: !isLeft
			})}
		>
			<Icon
				name={isLeft ? 'LuChevronLeft' : 'LuChevronRight'}
				className={styles.icon}
			/>
		</button>
	)
}

export default SlideArrow
