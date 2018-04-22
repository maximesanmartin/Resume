import React from 'react'
import PropTypes from 'prop-types'
import { select } from '@storybook/addon-knobs/react'
import Grid from './index'
import { SPACING, GRID_SIZES } from './constants'
import { createStories } from '../stories/utils'

const stories = createStories('Grid')

const root = {
  marginBottom: '20px'
}

const grid = {
  backgroundColor: '#FFC433'
}

const simple = {
  backgroundColor: '#335EFF',
  border: '2px solid blue',
  width: '100%',
  height: '50px'
}

const GridItem = ({ size, children }) => (
  <div size={size} style={simple}>
    {children || `size=${size}`}
  </div>
)
GridItem.defaultProps = {
  size: 6
}
GridItem.propTypes = {
  size: PropTypes.number,
  children: PropTypes.node
}

stories.add('One Grid', () => (
  <div>
    <div style={root}>
      <Grid spacing={Number(select('Spacing', SPACING, 16))}>
        <GridItem size={Number(select('Size', GRID_SIZES, 12))}>
          dynamic size={Number(select('Size', GRID_SIZES, 12))}
        </GridItem>
        {[6, 6, 3, 3, 3, 3, 11, 4].map((size) => (
          <GridItem size={size} />
        ))}
      </Grid>
    </div>
  </div>
))

stories.add('Nested Grids', () => (
  <div style={grid}>
    <Grid spacing={Number(select('Spacing', SPACING, 16))}>
      <Grid spacing={Number(select('Spacing', SPACING, 16))} size={8}>
        {[3, 3, 6].map((size) => (
          <GridItem size={size} />
        ))}
      </Grid>
      <Grid spacing={Number(select('Spacing', SPACING, 16))} size={4}>
        {[6, 6, 6, 6].map((size) => (
          <GridItem size={size} />
        ))}
      </Grid>
    </Grid>
  </div>
))
