import type { Meta, StoryObj } from '@storybook/react'

import NavbarProfile from './NavbarProfile'

const meta: Meta<typeof NavbarProfile> = {
  title: 'Atoms/NavbarProfile',
  component: NavbarProfile
}

export default meta
type Story = StoryObj<typeof NavbarProfile>

export const Primary: Story = {
  args: {
    placeholder: 'placeholder'
  }
}
