import React from 'react'

interface NavbarItemProps {
  title: string;
  path: string;
  className?: string;
}
const DropdownItem = (props: NavbarItemProps) => {
  const { title, path, className } = props
  return (
    <li>
      <a
        href={path}
        className='block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5'
      >
        {title}
      </a>
    </li>
  )
}

export default DropdownItem
