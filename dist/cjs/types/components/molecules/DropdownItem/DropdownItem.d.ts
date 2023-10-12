import React from 'react';
interface NavbarItemProps {
    title: string;
    path: string;
    className?: string;
}
declare const DropdownItem: (props: NavbarItemProps) => React.JSX.Element;
export default DropdownItem;
