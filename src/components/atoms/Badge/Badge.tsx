import React from 'react'

interface BadgeProps {
  children: React.ReactNode;
}
const Badge = (props: BadgeProps) => {
  const { children } = props
  return (
    <span className='inline-flex items-center rounded-full bg-red-600 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10'>
      {children ?? 'Badge'}
    </span>
  )
}

export default Badge
