import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { SPACING, GRID_SIZES } from './constants'

/**
 * GridItem Component
 * Should be used inside a Grid Component
 */
export default class GridItem extends PureComponent {
  static displayName = 'GridItem'

  static propTypes = {
    /**
     * Defines the space between the type `item` component.
     * It can only be used on a type `container` component.
     */
    spacing: PropTypes.oneOf(SPACING),
    /**
     * Defines the number of grids the component is going to use.
     * It's applied for all the screen sizes with the lowest priority.
     */
    size: PropTypes.oneOf(GRID_SIZES),
    /**
     * The content of the component.
     */
    children: PropTypes.node,

    className: PropTypes.string
  };

  static defaultProps = {
    spacing: SPACING[0]
  }

  render() {
    const { spacing, size, children, className } = this.props

    return (
      <GridItemWrapper
        spacing={spacing}
        size={size > 12 ? 12 : size}
        className={className}
      >
        {children}
      </GridItemWrapper>
    )
  }
}

const GridItemWrapper = styled.div`
  flex: 0 0 auto;
  margin: 0;
  box-sizing: border-box;
  display: block;
  padding: ${({ spacing }) => `${spacing / 2}px`};
  max-width: ${({ size }) => `${size * (100 / 12)}%`};
  flex: 1 1 ${({ size }) => `${size * (100 / 12)}%`};
  display: flex;
  justify-content: center;
  align-items: center;
`
