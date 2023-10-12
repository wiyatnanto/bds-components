import * as React from 'react';
import React__default from 'react';

declare const Slider: () => React.JSX.Element;

interface NavbarItemProps$1 {
    title: string;
    path: string;
    className?: string;
}
declare const NavbarItem: (props: NavbarItemProps$1) => React__default.JSX.Element;

declare const NavbarProfile: (props: any) => React__default.JSX.Element;

interface NavbarItemProps {
    title: string;
    path: string;
    className?: string;
}
declare const DropdownItem: (props: NavbarItemProps) => React__default.JSX.Element;

interface CTASectionProps {
    titleText: string;
    largeText: string;
    smallText: string;
    buttonText?: string;
}
declare const CTASection: (props: CTASectionProps) => React__default.JSX.Element;

interface ArticleSectionProps {
    largeText: string;
    smallText: string;
    articles: any;
}
declare const ArticleSection: (props: ArticleSectionProps) => React__default.JSX.Element;

interface ForumSectionProps {
    titleText: string;
    largeText: string;
    smallText: string;
    buttonText?: string;
}
declare const ForumSection: (props: ForumSectionProps) => React__default.JSX.Element;

interface ButtonProps {
    children: React__default.ReactNode;
    className?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'success' | 'danger';
    size?: 'sm' | 'lg';
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

interface ImageProps {
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
    className?: string;
}
declare const Image: (props: ImageProps) => React__default.JSX.Element;

interface LinkProps {
    href?: string;
    onClick?: () => void;
    children: React__default.ReactNode;
    target?: string;
    rel?: string;
}
declare const Link: (props: LinkProps) => React__default.JSX.Element;

declare const Heading: (props: any) => React__default.JSX.Element;

declare const Text: (props: any) => React__default.JSX.Element;

declare const NavbarBrand: (props: any) => React__default.JSX.Element;

interface IconProps {
    icon: string;
    size?: string;
    color?: string;
    variant?: string;
    className?: string;
}
declare const Icon: (props: IconProps) => React__default.JSX.Element;

interface HomepageProps {
    navbar: React.ReactNode;
    slider: React.ReactNode;
    children: React.ReactNode;
    footer: React.ReactNode;
}
declare const Homepage: (props: HomepageProps) => React.JSX.Element;

declare const Navbar: (props: any) => React__default.JSX.Element;

interface FooterProps {
    logo?: string;
    companyName?: string;
    navigation?: any;
}
declare const Footer: (props: FooterProps) => React.JSX.Element;

declare const LoginForm: (props: any) => React__default.JSX.Element;

declare const Home: () => React.JSX.Element;

export { ArticleSection, Badge, Button, CTASection, DropdownItem, Footer, ForumSection, Heading, Home, Homepage, Icon, Image, Input, Link, LoginForm, Navbar, NavbarBrand, NavbarItem, NavbarProfile, Slider, Text };
