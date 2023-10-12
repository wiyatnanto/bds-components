import React from 'react'

interface IconProps {
  icon: string;
  size?: string;
  color?: string;
  variant?: string;
  className?: string;
}
const Icon = (props: IconProps) => {
  const {
    icon,
    size = '1x',
    color = 'black',
    variant = 'fal',
    className
  } = props
  const iconClasses = `${variant} fa-${icon} text-${color} ${className}`

  return <i className={iconClasses} />
}

export default Icon
