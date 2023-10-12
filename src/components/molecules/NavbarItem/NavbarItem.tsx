import React from 'react'

interface NavbarItemProps {
  title: string;
  path: string;
  className?: string;
}
const NavbarItem = (props: NavbarItemProps) => {
  const { title, path, className } = props
  return (
    <li className={`mt-8 lg:mt-0 ${className}`}>
      <a href={path} className='text-gray-600 hover:text-indigo-600'>
        {title}
      </a>
    </li>
  )
}

export default NavbarItem
