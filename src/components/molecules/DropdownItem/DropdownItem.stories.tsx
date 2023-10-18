import type { Meta, StoryObj } from '@storybook/react'

import DropdownItem from './DropdownItem'

const meta: Meta<typeof DropdownItem> = {
  title: 'Atoms/DropdownItem',
  component: DropdownItem
}

export default meta
type Story = StoryObj<typeof DropdownItem>

export const Primary: Story = {
  args: {}
}
