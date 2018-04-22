import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs/react'
import Grid from './index'
import { SPACING, GRID_SIZES } from './constants'

const stories = storiesOf('Grid', module)

stories.addDecorator(withKnobs)

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

stories.add('One Grid', () => (
  <div>
    <div style={root}>
      <Grid spacing={Number(select('Spacing', SPACING, 16))}>
        <div
          size={Number(select(
            'Size',
            GRID_SIZES,
            12
          ))}
          style={simple}
        >
          dynamic size={Number(select(
            'Size',
            GRID_SIZES,
            12
          ))}
        </div>
        <div style={simple} size={6}>
          size=6
        </div>
        <div style={simple} size={6}>
          size=6
        </div>
        <div style={simple} size={3}>
          size=3
        </div>
        <div style={simple} size={3}>
          size=3
        </div>
        <div style={simple} size={3}>
          size=3
        </div>
        <div style={simple} size={3}>
          size=3
        </div>
        <div style={simple} size={11}>
          size=11
        </div>
        <div style={simple} size={4}>
          size=4
        </div>
      </Grid>
    </div>
  </div>
))

stories.add('Nested Grids', () => (
  <div style={grid}>
    <Grid spacing={Number(select('Spacing', [0, 8, 16, 24, 40], 16))}>
      <Grid spacing={Number(select('Spacing', [0, 8, 16, 24, 40], 16))} size={8}>
        <div style={simple} size={3}>
          Grid 1 - Size 3
        </div>
        <div style={simple} size={3}>
          Grid 1 - Size 3
        </div>
        <div style={simple} size={6}>
          Grid 1 - Size 6
        </div>
      </Grid>
      <Grid spacing={Number(select('Spacing', [0, 8, 16, 24, 40], 16))} size={4}>
        <div style={simple} size={6}>
          Grid 2 - Size 6
        </div>
        <div style={simple} size={6}>
          Grid 2 - Size 6
        </div>
        <div style={simple} size={6}>
          Grid 2 - Size 6
        </div>
        <div style={simple} size={6}>
          Grid 2 - Size 6
        </div>
      </Grid>
    </Grid>
  </div>
))
