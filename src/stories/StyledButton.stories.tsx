import { ComponentMeta, ComponentStory } from '@storybook/react'
import { StyledButton } from '../components/StyledButton'
import { action } from '@storybook/addon-actions'
import React, { useState } from 'react'

export default {
  title: 'StyledButton',
  component: StyledButton,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'success', 'transparent']
    },
    children: {
      control: { type: 'text' }
    },
    onClick: { action: 'clicked' }
  }
} as ComponentMeta<typeof StyledButton>

const Template: ComponentStory<typeof StyledButton> = (args) => (
  <StyledButton {...args} />
)

export const TemplateTest = Template.bind({})

TemplateTest.args = {
  variant: 'primary',
  children: 'Primary'
}

const incrementAction = action('increment')

export const Primary: ComponentStory<typeof StyledButton> = (props) => {
  const [count, setCount] = useState(0)
  const onClick = (e: React.MouseEvent) => {
    incrementAction(e, count)
    setCount((c) => c + 1)
  }
  return (
    <StyledButton {...props} variant='primary' onClick={onClick}>
      Primary
    </StyledButton>
  )
}

export const Success: ComponentStory<typeof StyledButton> = (props) => {
  return (
    <StyledButton {...props} variant='success'>
      Success
    </StyledButton>
  )
}

export const Transparent: ComponentStory<typeof StyledButton> = (props) => {
  return (
    <StyledButton {...props} variant='transparent'>
      Transparent
    </StyledButton>
  )
}
