import React from 'react'
import { Button } from '.'
import { screen, render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from '../Theme'

const renderWithTheme = (children: React.ReactNode, options: RenderOptions = {}) => {
  return render(<ThemeProvider>{children}</ThemeProvider>, options)
}

describe('Button', () => {
  it('should render content', () => {
    renderWithTheme(<Button>Hello</Button>)
    expect(screen.getByRole('button', { name: 'Hello' })).toBeInTheDocument()
  })
})
