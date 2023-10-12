import type { Meta, StoryObj } from '@storybook/react'

import ForumSection from './ForumSection'

const meta: Meta<typeof ForumSection> = {
  title: 'Molecules/Section/ForumSection',
  component: ForumSection
}

export default meta
type Story = StoryObj<typeof ForumSection>

export const Primary: Story = {
  args: {}
}
