import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import "./MobileHeader.scss"
import { Button } from '@/shared/ui/Button';

export const MobileHeader: FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className='Mobile__Header'>
            <ul>
                <Button onClick={() => changeLanguage("en")}>EN</Button>
                <Button onClick={() => changeLanguage("ru")}>RU</Button>
            </ul>
            <h2>Typeing</h2>
        </div>
    )
}