import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Welcome } from '@storybook/react/demo'
import { ThemeProvider } from 'styled-components'

import theme from '../app/theme'
import { Button as ButtonComponent } from '../app/components'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

const Button = (props) => (
  <ThemeProvider theme={theme}>
    <ButtonComponent palette='primary' {...props} />
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
