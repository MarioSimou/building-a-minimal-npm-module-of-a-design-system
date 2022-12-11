export type Scale = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
export type Color = Record<Scale, string>

const primary: Color = {
  50: '#F0FFF4',
  100: '#C6F6D5',
  200: '#9AE6B4',
  300: '#68D391',
  400: '#48BB78',
  500: '#38A169',
  600: '#2F855A',
  700: '#276749',
  800: '#22543D',
  900: '#1C4532',
}
const secondary: Color = {
  50: '#F7FAFC',
  100: '#EDF2F7',
  200: '#E2E8F0',
  300: '#CBD5E0',
  400: '#A0AEC0',
  500: '#718096',
  600: '#4A5568',
  700: '#2D3748',
  800: '#1A202C',
  900: '#171923',
}

export const colors = {
  white: '#fff',
  black: '#000',
  primary,
  secondary,
} as const

export type ColorScheme = Exclude<keyof typeof colors, 'white' | 'black'>
