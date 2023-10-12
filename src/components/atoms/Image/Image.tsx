import React from 'react'

interface ImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

const Image = (props: ImageProps) => {
  const { src, alt, ...restProps } = props
  return <img src={src} alt={alt} {...restProps} />
}

export default Image
