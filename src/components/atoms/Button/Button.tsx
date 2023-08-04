import React from 'react'

interface ButtonProps {
  label: String;
}

const Button = (props: ButtonProps) => {
  const { label } = props
  return <button className='btn btn-blue'>{label}</button>
}

export default Button
