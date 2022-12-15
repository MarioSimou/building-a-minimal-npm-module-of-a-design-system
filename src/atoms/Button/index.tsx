import React from 'react'
import { useTheme } from '../..'
import type { ColorScheme } from '../..'

export type ButtonProps = {
  colorScheme?: ColorScheme
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({ children, colorScheme = 'primary', ...buttonProps }) => {
  const { colors } = useTheme()
  const color = colors[colorScheme]

  const style: React.CSSProperties = {
    background: color[900],
    border: '1.5px solid',
    borderColor: color[400],
    color: colors.white,
    padding: '0.4rem 1rem',
    borderRadius: '1rem',
  }

  return (
    <button style={style} {...buttonProps}>
      {children}
    </button>
  )
}
