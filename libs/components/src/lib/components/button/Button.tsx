
// #5080D7  blue
// #C6488C purple
// #FF3131 red
//  #f5f5f5 gray

import { css } from "@emotion/react";

interface Props {
    variant?: 'primary' | 'secondary' | 'danger';
    size: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    children: React.ReactNode;
}


const Button = (props: Props) => {
    const { variant, size, onClick, children } = props;

    return (
        <button css={buttonCss(variant, size)} onClick={onClick} variant={variant} size={size} >
            {children}
        </button>
    )
}

export default Button;

const buttonCss = (variant: 'primary' | 'secondary' | 'danger', size: 'sm' | 'md' | 'lg') => css`
    background-color:${variant === 'primary' ? '#5080D7' : variant === 'secondary' ? '#C6488C' : '#FF3131'};
    width:${size === 'sm' ? '100px' : size === 'md' ? '150px' : '100%'};
    height:${size === 'sm' ? '30px' : size === 'md' ? '40px' : '50px'};
    border:1px solid none;
    border-radius: 20px;
    color:white;
    cursor:pointer;
    &:hover{
        opacity:0.8;
    }
`