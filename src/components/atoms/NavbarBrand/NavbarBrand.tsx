import React from 'react'

import Image from '@/components/atoms/Image'
import Link from '@/components/atoms/Link'

const NavbarBrand = (props: any) => {
  const { logoSrc, logoAlt, width, height, onClick } = props
  return (
    <Link onClick={onClick}>
      <Image src={logoSrc} alt={logoAlt} width={width} height={height} />
    </Link>
  )
}

export default NavbarBrand
