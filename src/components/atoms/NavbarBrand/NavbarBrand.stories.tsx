import type { Meta, StoryObj } from '@storybook/react'

import NavbarBrand from './NavbarBrand'

const meta: Meta<typeof NavbarBrand> = {
  title: 'Atoms/NavbarBrand',
  component: NavbarBrand
}

export default meta
type Story = StoryObj<typeof NavbarBrand>

export const Primary: Story = {
  args: {}
}
