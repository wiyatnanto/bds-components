import React from 'react'
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'sm' | 'lg';
}

const Button = (props: ButtonProps) => {
  const { children, className, onClick, variant, size } = props

  const buttonClasses = `rounded-lg ${className} ${
    size === 'sm'
      ? 'py-1 px-2 text-sm'
      : size === 'lg'
      ? 'py-3 px-6 text-lg'
      : 'py-2 px-4'
  } ${
    variant === 'primary'
      ? 'bg-blue-500 hover:bg-blue-700 text-white'
      : variant === 'secondary'
      ? 'bg-gray-300 hover:bg-gray-400 text-gray-700'
      : variant === 'success'
      ? 'bg-green-500 hover:bg-green-700 text-white'
      : variant === 'danger'
      ? 'bg-red-500 hover:bg-red-700 text-white'
      : ''
  }`

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
