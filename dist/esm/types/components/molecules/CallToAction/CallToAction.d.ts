import React from 'react';
interface CallToActionProps {
    titleText: string;
    largeText: string;
    smallText: string;
    buttonText?: string;
}
declare const NavbarItem: (props: CallToActionProps) => React.JSX.Element;
export default NavbarItem;
