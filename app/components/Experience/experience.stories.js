import React from 'react'
import { text } from '@storybook/addon-knobs'

import Experience from './'
import { createStories, themeComponent } from '../stories/utils'

const ThemedExperience = themeComponent('Experience', Experience)
const stories = createStories('Experience')
stories.add('Default', () => (
  <ThemedExperience
    title={text('title', 'Lorem Ipsum')}
    start={new Date()}
    position={text('position', 'Full Stack Developer')}
    country={text('country', 'New York')}
  >
    {text('Body text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}
  </ThemedExperience>
))
