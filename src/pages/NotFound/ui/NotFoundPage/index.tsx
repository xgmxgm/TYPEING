import { FC } from 'react'

import "./NotFoundPage.scss"
import { Header } from '@/widgets/Header/ui/Header'
import { Link } from 'react-router-dom'
import { Button } from '@/shared/ui/Button'

export const NotFoundPage: FC = () => {
    return (
        <div className='flex flex-col items-center'>
            <Header />
            <h2>NOT FOUND</h2>
            <Link to={"/"}>
                <Button>
                    HOME
                </Button>
            </Link>
        </div>
    )
}