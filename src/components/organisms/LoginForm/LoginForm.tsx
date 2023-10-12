import React from 'react'
import LoginHeader from '@/components/molecules/LoginHeader'
import { Button } from '@/components/atoms'

interface FooterProps {
  formLogo?: string;
  formText?: string;
  brandOnClick: void;
}
const LoginForm = (props: any) => {
  const { formLogo, formText, brandOnClick } = props
  return (
    <>
      <LoginHeader logo={formLogo} text={formText} onClick={brandOnClick} />
      <form onSubmit={e => e.preventDefault()} className='space-y-5'>
        <div>
          <label className='font-medium'>Email</label>
          <input
            type='email'
            required
            className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
          />
        </div>
        <div>
          <label className='font-medium'>Password</label>
          <input
            type='password'
            required
            className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
          />
        </div>
        <div className='flex items-center justify-between text-sm'>
          <div className='flex items-center gap-x-3'>
            <input
              type='checkbox'
              id='remember-me-checkbox'
              className='checkbox-item peer hidden'
            />
            <label
              htmlFor='remember-me-checkbox'
              className='relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45'
            ></label>
            <span>Remember me</span>
          </div>
          <a
            href='#'
            className='text-center text-indigo-600 hover:text-indigo-500'
          >
            Forgot password?
          </a>
        </div>
        <Button className='w-full' variant='primary'>
          Sign in
        </Button>
      </form>
      <button className='w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100'>
        Logo google Continue with Google
      </button>
      <p className='text-center'>
        Dont have an account?{' '}
        <a
          href=''
          className='font-medium text-indigo-600 hover:text-indigo-500'
        >
          Sign up
        </a>
      </p>
    </>
  )
}

export default LoginForm
