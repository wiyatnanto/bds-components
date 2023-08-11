import * as React from 'react';
import React__default from 'react';

interface NavbarProps {
    logo: string;
}
declare const Navbar: (props: NavbarProps) => React.JSX.Element;

declare const Carousel: () => React.JSX.Element;

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
    children: React.ReactNode;
}
declare const Badge: (props: BadgeProps) => React.JSX.Element;

interface HomepageProps {
    navbar: React.ReactNode;
    slider: React.ReactNode;
    children: React.ReactNode;
}
declare const Homepage: (props: HomepageProps) => React.JSX.Element;

declare const Home: () => React.JSX.Element;

export { Badge, Button, Carousel, Home, Homepage, Input, Navbar, Slider };
