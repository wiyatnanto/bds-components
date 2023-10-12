import React from 'react';
interface IconProps {
    icon: string;
    size?: string;
    color?: string;
    variant?: string;
    className?: string;
}
declare const Icon: (props: IconProps) => React.JSX.Element;
export default Icon;
