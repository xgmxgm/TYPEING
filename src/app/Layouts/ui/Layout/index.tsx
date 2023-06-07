import { FC, type PropsWithChildren } from 'react'

import "./Layout.scss"
import { Header } from '@/widgets/Header/ui/Header'

export const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}