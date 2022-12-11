import React from 'react'
import { Button } from '.'
import type { ButtonProps } from '.'
import type { Meta, StoryFn } from '@storybook/react'

const Template: StoryFn<ButtonProps> = props => <Button {...props} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary',
  colorScheme: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary',
  colorScheme: 'secondary',
}

const meta: Meta = {
  title: 'Button',
  component: Button,
}
export default meta
