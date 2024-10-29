import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

interface IHeading {
	className?: string
}

const Heading: FC<PropsWithChildren<IHeading>> = ({ children, className }) => {
	return <h2 className={cn('text-2xl font-semibold', className)}>{children}</h2>
}

export default Heading
