import { reversePalette } from 'styled-theme/composer'

const theme = {}

theme.palette = {
  primary: ['royalblue'],
  secondary: ['red'],
  danger: ['red'],
  alert: ['orange'],
  success: ['green'],
  grayscale: ['#212121', '#616161', '#9e9e9e', '#bdbdbd', '#e0e0e0', '#ffffff']
}

theme.reversePalette = reversePalette(theme.palette)

theme.fonts = {
  primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif'
}

export default theme
