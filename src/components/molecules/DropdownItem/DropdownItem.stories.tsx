import type { Meta, StoryObj } from '@storybook/react'

import NavbarItem from './DropdownItem'

const meta: Meta<typeof NavbarItem> = {
  title: 'Atoms/NavbarItem',
  component: NavbarItem
}

export default meta
type Story = StoryObj<typeof NavbarItem>

export const Primary: Story = {
  args: {}
}
