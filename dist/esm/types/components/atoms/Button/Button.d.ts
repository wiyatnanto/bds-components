import React from 'react';
interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'success' | 'danger';
    size?: 'sm' | 'lg';
}
declare const Button: (props: ButtonProps) => React.JSX.Element;
export default Button;
