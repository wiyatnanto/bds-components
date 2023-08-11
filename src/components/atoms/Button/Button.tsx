import React from 'react'

interface ButtonProps {
  label: String;
}

const Button = (props: ButtonProps) => {
  const { label } = props
  return (
    <button className='btn btn-blue bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
      {label}
    </button>
  )
}

export default Button
