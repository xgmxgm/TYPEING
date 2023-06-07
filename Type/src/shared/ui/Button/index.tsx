import { forwardRef } from 'react';
import "./Button.scss";

interface ButtonProps {
    children: string;
    onClick?: () => void;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(( props, ref) => {
    const {children , onClick} = props;

    return (
        <button ref={ref} onClick={onClick} className='btn'>
            {children}
        </button>
    )
})