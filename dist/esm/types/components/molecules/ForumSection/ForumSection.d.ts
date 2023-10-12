import React from 'react';
interface ForumSectionProps {
    titleText: string;
    largeText: string;
    smallText: string;
    buttonText?: string;
}
declare const ForumSection: (props: ForumSectionProps) => React.JSX.Element;
export default ForumSection;
