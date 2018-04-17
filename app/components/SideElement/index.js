import React from 'react'
import styled from 'styled-components'
import { palette, font } from 'styled-theme'

const StyledLi = styled.li`
  background: ${palette('grayscale', 2)};
  position: relative;
  cursor: pointer;

  &:before {
    height: 100%;
    width: 5px;
    left: 0;
    top: 0;
    position: absolute;
    content: '';
    display: inline-block;
    background: ${palette(0)};
    transition: 0.4s;
    z-index: 50;
  }

  &:hover, &:focus {
    &:before {
      width: 100%;
    }

    & > a {
      color: ${palette('grayscale', 5)} !important;
    }
  }
`

const SideElementComponent = styled.a`
  font-family: ${font('primary')};
  transition: 0.4s;
  background: transparent !important;
  color: ${palette(0)};
  z-index: 100;
  text-transform: uppercase;
  position: relative;
  padding: 0.25em 1em;
  display: inline-block;
`

const SideElement = (props) => (
  <StyledLi {...props}>
    <SideElementComponent {...props} />
  </StyledLi>
)

SideElement.defaultProps = {
  palette: 'secondary'
}

export default SideElement
