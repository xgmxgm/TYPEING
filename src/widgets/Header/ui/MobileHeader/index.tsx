import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

import "./MobileHeader.scss"
import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/modal/Modal';

export const MobileHeader: FC = () => {
    const [modalActive, setModalActive] = useState<boolean>(false);

    const { t, i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className='Mobile__Header'>
            <div className='Header__div'>
                <h2>Typeing</h2>
                <Modal active={modalActive} setActive={setModalActive}>
                    <h2>{t("Header.language")}</h2>
                    <Button onClick={() => changeLanguage("en")}>EN</Button>
                    <Button onClick={() => changeLanguage("ru")}>RU</Button>
                </Modal>
                <Button onClick={() => setModalActive(true)}>{t("Header.language")}</Button>
            </div>
        </div>
    )
}