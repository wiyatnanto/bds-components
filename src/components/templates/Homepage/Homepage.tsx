import * as React from 'react'

interface HomepageProps {
  navbar: React.ReactNode;
  slider: React.ReactNode;
  children: React.ReactNode;
}

const Homepage = (props: HomepageProps) => {
  const { navbar, slider, children } = props
  return (
    <>
      <div className='container mx-auto relative z-10'>{navbar}</div>
      <div className='mt-[-80px]'>{slider}</div>
      {children}
    </>
  )
}

export default Homepage
