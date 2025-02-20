import { FC, PropsWithChildren } from 'react'

import MainLayout from '@/components/layout/MainLayout'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return <MainLayout>{children}</MainLayout>
}

export default Layout
