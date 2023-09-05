import * as React from 'react';
import React__default from 'react';

declare const Slider: () => React.JSX.Element;

interface ButtonProps {
    label: String;
}
declare const Button: (props: ButtonProps) => React__default.JSX.Element;

interface InputProps {
    className: string;
    placeholder: string;
}
declare const Input: (props: InputProps) => React.JSX.Element;

interface BadgeProps {
    children: React__default.ReactNode;
}
declare const Badge: (props: BadgeProps) => React__default.JSX.Element;

interface HomepageProps {
    navbar: React.ReactNode;
    slider: React.ReactNode;
    children: React.ReactNode;
    footer: React.ReactNode;
}
declare const Homepage: (props: HomepageProps) => React.JSX.Element;

interface NavbarProps {
    logo?: string;
}
declare const Navbar: (props: NavbarProps) => React.JSX.Element;

interface FooterProps {
    logo?: string;
    companyName?: string;
    navigation?: any;
}
declare const Footer: (props: FooterProps) => React.JSX.Element;

export { Badge, Button, Footer, Homepage, Input, Navbar, Slider };
