import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ThemeProvider } from 'styled-components'

import theme from '../../theme'
import SideElementComponent from './'

const SideElement = (props) => (
  <ThemeProvider theme={theme}>
    <SideElementComponent {...props} />
  </ThemeProvider>
)

storiesOf('SideElement', module)
  .add('with primary text', () => <SideElement palette='primary' onClick={action('clicked')}>Hello Button</SideElement>)
  .add('with secondary text', () => <SideElement palette='secondary' onClick={action('clicked')}>Hello Button</SideElement>)
