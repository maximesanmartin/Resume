import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ThemeProvider } from 'styled-components'

import theme from '../../theme'
import ButtonComponent from './'

const Button = (props) => (
  <ThemeProvider theme={theme}>
    <ButtonComponent {...props} />
  </ThemeProvider>
)

storiesOf('Button', module)
  .add('with primary text', () => <Button palette='primary' onClick={action('clicked')}>Hello Button</Button>)
  .add('with secondary text', () => <Button palette='secondary' onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role='img' aria-label='so cool'>
        😀 😎 👍 💯
      </span>
    </Button>
  ))
