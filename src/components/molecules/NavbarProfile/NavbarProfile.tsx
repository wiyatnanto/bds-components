import React, { useEffect } from 'react'

import { useRef, useState } from 'react'
import DropdownItem from '../DropdownItem'

const NavbarProfile = (props: any) => {
  const [state, setState] = useState(false)

  const navigation = [
    { title: 'Beranda', path: '/' },
    { title: 'Profil', path: '/' },
    { title: 'Keluar', path: '/' }
  ]

  useEffect(() => {
    const handleDropDown = (e: any) => {
      // if (!profileRef?.current?.contains(e.target)) setState(false)
    }
    document.addEventListener('click', handleDropDown)
  }, [])

  return (
    <div className={`relative ${props.className}`}>
      <div className='flex items-center space-x-4'>
        <button
          className='w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600'
          onClick={() => setState(!state)}
        >
          <img
            src='https://randomuser.me/api/portraits/men/46.jpg'
            className='w-full h-full rounded-full'
          />
        </button>
        <div className='lg:hidden'>
          <span className='block'>Micheal John</span>
          <span className='block text-sm text-gray-500'>john@gmail.com</span>
        </div>
      </div>
      <ul
        className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
          state ? '' : 'lg:hidden'
        }`}
      >
        {navigation.map((item, idx) => (
          <DropdownItem key={idx} title={item.title} path={item.path} />
        ))}
      </ul>
    </div>
  )
}

export default NavbarProfile
