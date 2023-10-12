import React from 'react'

const Text = (props: any) => {
  const { children, clamp } = props
  return <p {...props}>{children}</p>
}
export default Text
