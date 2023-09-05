import * as React from 'react'

import { Navbar, Footer } from '../../components/organisms'

import { Homepage } from '../../components/templates'
import { Input } from '../../components/atoms'
import { Slider } from '../../components/molecules'

const Home = () => {
  return (
    <Homepage
      navbar={<Navbar logo={'logo'} />}
      slider={<Slider />}
      footer={
        <>
          <Footer
            logo={'https://brin.go.id/images/logo.png'}
            companyName={'Badan Riset dan Invoasi Nasional (BRIN)'}
            navigation={{
              solutions: [
                { name: 'Marketing', href: '#' },
                { name: 'Analytics', href: '#' },
                { name: 'Commerce', href: '#' },
                { name: 'Insights', href: '#' }
              ],
              support: [
                { name: 'Pricing', href: '#' },
                { name: 'Documentation', href: '#' },
                { name: 'Guides', href: '#' },
                { name: 'API Status', href: '#' }
              ],
              company: [
                { name: 'About', href: '#' },
                { name: 'Blog', href: '#' },
                { name: 'Jobs', href: '#' },
                { name: 'Press', href: '#' },
                { name: 'Partners', href: '#' }
              ],
              legal: [
                { name: 'Claim', href: '#' },
                { name: 'Privacy', href: '#' },
                { name: 'Terms', href: '#' }
              ],
              social: [
                {
                  name: 'Facebook',
                  href: '#',
                  icon: 'fab fa-facebook'
                },
                {
                  name: 'Instagram',
                  href: '#',
                  icon: 'fab fa-instagram'
                },
                {
                  name: 'Twitter',
                  href: '#',
                  icon: 'fab fa-twitter'
                },
                {
                  name: 'GitHub',
                  href: '#',
                  icon: 'fab fa-github'
                },
                {
                  name: 'YouTube',
                  href: '#',
                  icon: 'fab fa-youtube'
                }
              ]
            }}
          />
        </>
      }
    >
      Testing Doang
    </Homepage>
  )
}

export default Home
