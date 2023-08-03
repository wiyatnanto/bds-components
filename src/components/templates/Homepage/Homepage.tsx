import * as React from 'react'

interface HomepageProps {
  children: React.ReactNode;
}

const Homepage = (props: HomepageProps) => {
  const { children } = props
  return (
    <div className='container mx-auto sm:px-4'>
      <div className='flex flex-wrap'>
        <div className='md:w-full pr-4 pl-4'>{children}</div>
      </div>
    </div>
  )
}

export default Homepage
