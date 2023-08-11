import type { Meta, StoryObj } from '@storybook/react'

import Homepage from './Homepage'

const meta: Meta<typeof Homepage> = {
  title: 'Templates/Homepage',
  component: Homepage
}

export default meta
type Story = StoryObj<typeof Homepage>

export const Primary: Story = {}
