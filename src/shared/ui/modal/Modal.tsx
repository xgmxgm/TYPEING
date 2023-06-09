import "./popUp.scss"

interface IProps {
    active: boolean,
    setActive: (active: boolean) => void,
    children: React.ReactNode
}

export const Modal = (props: IProps) => {
    const { active, setActive, children } = props

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}