import * as React from 'react'

interface HomepageProps {
  navbar: React.ReactNode;
  slider: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
}

const Homepage = (props: HomepageProps) => {
  const { navbar, slider, children, footer } = props
  return (
    <>
      <div className='mx-auto max-w-7xl relative z-10'>{navbar}</div>
      <div className='mt-[0px] lg:mt-[-80px]'>{slider}</div>
      {children}
      {footer}
    </>
  )
}

export default Homepage
