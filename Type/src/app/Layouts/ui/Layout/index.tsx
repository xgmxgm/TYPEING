import { FC, type PropsWithChildren } from 'react'

import "./Layout.scss"
import { Header } from '@/widgets/Header/ui/Header'
import { Scroll } from '@/shared/ui/Scroll'

export const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <>
            {/* <Scroll /> */}
            <Header />
            {children}
        </>
    )
}