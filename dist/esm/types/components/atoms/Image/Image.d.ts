import React from 'react';
interface ImageProps {
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
    className?: string;
}
declare const Image: (props: ImageProps) => React.JSX.Element;
export default Image;
