import type { Meta, StoryObj } from '@storybook/react'

import Link from './Icon'

const meta: Meta<typeof Link> = {
  title: 'Atoms/Link',
  component: Link
}

export default meta
type Story = StoryObj<typeof Link>

export const Primary: Story = {
  args: {}
}
