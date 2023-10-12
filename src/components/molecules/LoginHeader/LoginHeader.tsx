import React from 'react'

import { Link, Image, Heading } from '@/components/atoms'

const LoginHeader = (props: any) => {
  const { logo, text, onClick } = props

  return (
    <div className='text-center pb-8'>
      <Link onClick={onClick}>
        <Image src={logo} alt='logo' className='mx-auto' />
      </Link>
      <div className='mt-5'>
        <Heading
          level={3}
          className='text-gray-800 text-2xl font-bold sm:text-2xl'
        >
          {text}
        </Heading>
      </div>
    </div>
  )
}

export default LoginHeader
