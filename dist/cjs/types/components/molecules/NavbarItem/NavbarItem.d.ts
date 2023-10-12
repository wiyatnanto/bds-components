import React from 'react';
interface NavbarItemProps {
    title: string;
    path: string;
    className?: string;
}
declare const NavbarItem: (props: NavbarItemProps) => React.JSX.Element;
export default NavbarItem;
