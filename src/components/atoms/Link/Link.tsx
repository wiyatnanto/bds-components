import React from 'react'

interface LinkProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}
const Link = (props: LinkProps) => {
  const { href, onClick, children, target, rel } = props

  const handleClick = (event: any) => {
    if (onClick) {
      event.preventDefault()
      onClick()
    }
  }

  if (href) {
    return (
      <a href={href} onClick={handleClick} target={target} rel={rel}>
        {children}
      </a>
    )
  } else {
    return (
      <button onClick={onClick} type='button'>
        {children}
      </button>
    )
  }
}

export default Link
