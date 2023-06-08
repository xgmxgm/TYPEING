import "./TranslateButton.scss"

export const TranslateButton = (props: any) => {
    const { active, setActive, children } = props

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}