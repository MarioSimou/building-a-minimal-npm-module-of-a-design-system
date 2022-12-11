import React from 'react'
import { colors } from '../colors'

type ThemeContextProps = {
  colors: typeof colors
}
const ThemeContext = React.createContext<ThemeContextProps>({ colors })

export const useTheme = () => React.useContext(ThemeContext)

type ThemeProviderProps = {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return <ThemeContext.Provider value={{ colors }}>{children}</ThemeContext.Provider>
}
