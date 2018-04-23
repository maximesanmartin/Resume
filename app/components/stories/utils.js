import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs'
import { ThemeProvider } from 'styled-components'

import theme from '../../theme'

// Theme Provider's HOC
/* eslint-disable react/prop-types */
const themeComponent = (name, Component) => ({ children, ...rest }) => (
  <ThemeProvider theme={theme}>
    <Component {...rest}>
      { children || text('Text', `Hello ${name}`)}
    </Component>
  </ThemeProvider>
)

export const createStories = (name) => (storiesOf(name, module)
  .addDecorator(withKnobs)
)

export const createDefaultStories = (name, Component) => {
  const stories = createStories(name)
  const ThemeComponent = themeComponent(name, Component)
  stories.add('with text', () => <ThemeComponent disabled={boolean('disabled')} palette={select('Palette', Object.keys(theme.palette), 'primary')} onClick={action('clicked')} />)
  stories.add('with emojis :D', () => (
    <ThemeComponent palette={select('Palette', Object.keys(theme.palette), 'primary')} onClick={action('clicked')}>
      <span role='img' aria-label='so cool'>😀 😎 👍 💯</span>
    </ThemeComponent>
  ))

  return stories
}

// TODO add "addStory"
export const addStory = (story, name, Component, props) => {
  const ThemeComponent = themeComponent(name, Component)
  return story.add(name, () => (
    <ThemeComponent {...props} />
  ))
}
