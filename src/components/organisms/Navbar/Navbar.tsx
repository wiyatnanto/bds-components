import React from 'react'

import { useState, useRef, useEffect } from 'react'
import NavbarItem from '@/components/molecules/NavbarItem'
import { NavbarProfile } from '@/components/molecules'
import { Icon, NavbarBrand } from '@/components/atoms'

const Navbar = (props: any) => {
  const { menus } = props
  const [menuState, setMenuState] = useState(false)
  return (
    <nav className='bg-white border-b'>
      <div className='flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8'>
        <div className='flex-none lg:flex-initial'>
          <NavbarBrand
            logoSrc={'https://www.floatui.com/logo.svg'}
            logoAlt='Logo Alt'
            width={120}
            height={50}
          />
        </div>
        <div className='flex-1 flex items-center justify-between'>
          <div
            className={`bg-white absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${
              menuState ? '' : 'hidden'
            }`}
          >
            {/* <ul className='mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0'> */}
            <ul className='justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
              {menus.map((item: any, idx: number) => (
                <NavbarItem key={idx} title={item.title} path={item.path} />
              ))}
            </ul>
            <NavbarProfile className='mt-5 pt-5 border-t lg:hidden' />
          </div>
          <div className='flex-1 flex items-center justify-end space-x-2 sm:space-x-6'>
            <form className='flex items-center space-x-2 border rounded-md p-2'>
              <Icon icon='search' variant='far' className='text-gray-300' />
              <input
                className='w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto'
                type='text'
                placeholder='Search'
              />
            </form>
            <NavbarProfile className='hidden lg:block' />
            <button
              className='outline-none text-gray-400 block lg:hidden'
              onClick={() => setMenuState(!menuState)}
            >
              {menuState ? <>XXXX</> : <>YYYY</>}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
