import React from 'react';
interface LinkProps {
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    target?: string;
    rel?: string;
}
declare const Link: (props: LinkProps) => React.JSX.Element;
export default Link;
