import type { Meta, StoryObj } from '@storybook/react'

import ArticleSection from './ArticleSection'

const meta: Meta<typeof ArticleSection> = {
  title: 'Molecules/Section/ArticleSection',
  component: ArticleSection
}

export default meta
type Story = StoryObj<typeof ArticleSection>

export const Primary: Story = {
  args: {}
}
