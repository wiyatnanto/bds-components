import type { Meta, StoryObj } from '@storybook/react'

import Footer from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'Organisms/Footer',
  component: Footer
}

export default meta
type Story = StoryObj<typeof Footer>

export const Primary: Story = {
  args: {
    logo: 'https://brin.go.id/images/logo.png',
    companyName: 'Badan Riset dan Inovasi Nasional',
    navigation: {
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
    }
  }
}
