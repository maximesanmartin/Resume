import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { space } from 'styled-system'

const ce = React.createElement

export default styled(({ is, children, ...props }) => ce(is, props, children)).attrs({
  is: 'span',
  palette: 'grayscale'
})`
  color: ${palette(0)};
  ${space}
`
