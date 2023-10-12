import React from 'react'

const Heading = (props: any) => {
  const { children, level } = props

  const HeadingTag = `h${level}`

  return <HeadingTag {...props}>{children}</HeadingTag>
}
export default Heading
