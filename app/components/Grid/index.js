import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import GridItem from './grid-item'
import { SPACING } from './constants'

/* eslint-disable no-tabs */
/**
 * Grid Component : 12-column grid layout
 * A grid component using https://material-ui-next.com/layout/grid/ as inspiration.
 * Need to be use with GridItem
 *
 * <Grid spacing={16}> // create space of 16px between gridItem
 *	<div size={12}>size=12</div> takes 12 columns of 12 so will take the full width
 *	<div size={6}>size=6</div> // takes 6 columns of 12 so will take the half width and have space for 6 more column
 * </Grid>
 */
/* eslint-enable */
export default class Grid extends PureComponent {
  static displayName = 'Grid'

  static propTypes = {
    /**
     * Defines the space between the type `item` component.
     * It can only be used on a type `container` component.
     */
    spacing: PropTypes.oneOf(SPACING),
    /**
     * The content of the component.
     */
    children: PropTypes.node,

    className: PropTypes.string
  };

  static defaultProps = {
    spacing: SPACING[0]
  }

  renderChildren = () => (
    React.Children.map(this.props.children, (child) => (
      <GridItem size={child.props.size} spacing={this.props.spacing}>
        {child}
      </GridItem>
    ))
  )

  render() {
    const { spacing, className } = this.props

    return (
      <GridContainer spacing={spacing} className={className}>
        {this.renderChildren()}
      </GridContainer>
    )
  }
}

// TODO Breakpoints
const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
`
