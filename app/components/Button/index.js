import styled from 'styled-components'
import { palette, font } from 'styled-theme'

const Button = styled.button`
  font-family: ${font('primary')};
  padding: 0.25em 1em;
  font-size: 1em;
  box-shadow: none;
  outline: 0;
  border-radius: 3px;
  transition: background-color 0.2s ease-out, color 0.5s;
  background-color: ${palette('grayscale', 5)};
  color: ${palette(0)};
  &:hover, &:focus {
    background-color: ${palette(0)};
    color: ${palette('grayscale', 5)};
  }
  border: 2px solid ${palette(0)};
`

Button.defaultProps = {
  palette: 'secondary'
}

export default Button
