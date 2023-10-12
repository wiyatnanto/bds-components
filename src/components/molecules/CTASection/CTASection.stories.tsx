import type { Meta, StoryObj } from '@storybook/react'

import CTASection from './CTASection'

const meta: Meta<typeof CTASection> = {
  title: 'Molecules/Section/CTASection',
  component: CTASection
}

export default meta
type Story = StoryObj<typeof CTASection>

export const Primary: Story = {
  args: {}
}
