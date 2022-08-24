import styled, { css } from 'styled-components'

const variants = {
  primary: {
    color: '#ffffff',
    backgroundColor: '#1D3461',
    border: 'none'
  },
  success: {
    color: '#ffffff',
    backgroundColor: '#5AB203',
    border: 'none'
  },
  transparent: {
    color: '#111111',
    backgroundColor: 'transparent',
    border: '1px solid black'
  }
} as const

type StyledButtonProps = {
  variant: keyof typeof variants
}
