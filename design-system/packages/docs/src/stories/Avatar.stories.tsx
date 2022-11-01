import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@gb-ignite-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/GBDev13.png',
    alt: 'GB Dev',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
