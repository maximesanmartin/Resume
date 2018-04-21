import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette, font } from 'styled-theme'

const StyledLi = styled.li`
  background: ${palette('grayscale', 2)};
  position: relative;
  cursor: pointer;
  color: ${palette(0)};
  font-family: ${font('primary')};

  :before {
    height: 100%;
    width: ${({ sideWidth }) => sideWidth}px;
    left: 0;
    top: 0;
    position: absolute;
    content: '';
    display: inline-block;
    background: ${palette(0)};
    transition: 0.4s;
    z-index: 50;
  }

  :hover, :focus {
    &:before {
      width: 100%;
    }

    & > a {
      color: ${palette('grayscale', 5)} !important;
    }
  }
`

const SideElementComponent = styled.a`
  transition: 0.4s;
  background: transparent !important;
  z-index: 100;
  text-transform: uppercase;
  position: relative;
  padding: 0.25em 1em;
  padding-left: ${({ sideWidth }) => sideWidth + 8}px;
  display: inline-block;
`

/**
 * TODO Rename it when we have a styled Sidebar
 * SideElement Component
 * Works as a <li><a></li> element
 * Used for sidebar styling lists
 * Usage:
 * <SideElement [palette='**theme's palette name**'sideWidth={**your value**|5(default)}] />
 */
const SideElement = ({ palette: paletteTheme, sideWidth, font: fontTheme, children }) => (
  <StyledLi palette={paletteTheme} sideWidth={sideWidth} font={fontTheme}>
    <SideElementComponent sideWidth={sideWidth}>
      {children}
    </SideElementComponent>
  </StyledLi>
)

SideElement.propTypes = {
  /**
   * Defines the color according to the given theme
   * @type {String}
   */
  palette: PropTypes.string,
  /**
   * Left color band's width
   * @type {number}
   */
  sideWidth: PropTypes.number,
  /**
   * Theme's font (primary)
   * @type {String}
   */
  font: PropTypes.string,
  /**
   * Children's node
   * @type {node}
   */
  children: PropTypes.node
}

SideElement.defaultProps = {
  palette: 'secondary',
  sideWidth: 5
}

export default SideElement
