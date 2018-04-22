import React from 'react'
import PropTypes from 'prop-types'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ThemeProvider } from 'styled-components'

import theme from '../../theme'
import ButtonComponent from './'

const StoryButton = ({ children, ...rest }) => (
  <ThemeProvider theme={theme}>
    <ButtonComponent {...rest}>
      {children || 'Hello Button'}
    </ButtonComponent>
  </ThemeProvider>
)

StoryButton.propTypes = {
  children: PropTypes.node
}

storiesOf('Button', module)
  .add('with primary text', () => <StoryButton palette='primary' onClick={action('clicked')} />)
  .add('with secondary text', () => <StoryButton palette='secondary' onClick={action('clicked')} />)
  .add('with some emoji', () => (
    <StoryButton onClick={action('clicked')}>
      <span role='img' aria-label='so cool'>
        😀 😎 👍 💯
      </span>
    </StoryButton>
  ))
