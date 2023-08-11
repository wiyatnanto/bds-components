import * as React from 'react'

import { Navbar, Slider } from '../../components/molecules'

import { Homepage } from '../../components/templates'
import { Input } from '../../components/atoms'

const Home = () => {
  return (
    <Homepage
      navbar={<Navbar logo={'https://brin.go.id/images/logo.png'} />}
      slider={<Slider />}
    >
      Testing
    </Homepage>
  )
}

export default Home
