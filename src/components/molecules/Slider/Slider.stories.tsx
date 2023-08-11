import type { Meta, StoryObj } from '@storybook/react'

import Slider from './Slider'

const meta: Meta<typeof Slider> = {
  title: 'Molecules/Slider',
  component: Slider
}

export default meta
type Story = StoryObj<typeof Slider>

export const Primary: Story = {
  args: {
    logo: 'https://brin.go.id/images/logo.png'
  }
}
