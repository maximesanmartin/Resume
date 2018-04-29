import React from 'react'
import { text, date, boolean } from '@storybook/addon-knobs'

import Experience from './'
import Timeline from './Timeline'
import { createStories, themeComponent } from '../stories/utils'

const dateKnob = (name, defaultValue = new Date()) => {
  const stringTimestamp = date(name, defaultValue)
  return new Date(stringTimestamp)
}

const ThemedExperience = themeComponent('Experience', Experience)
const ThemedTimeline = themeComponent('Timeline', Timeline)

const stories = createStories('Experience')
stories.add('Default', () => (
  <ThemedExperience
    title={text('title', 'Lorem Ipsum')}
    start={dateKnob('start')}
    end={dateKnob('end')}
    position={text('position', 'Full Stack Developer')}
    country={text('country', 'New York')}
    reverse={boolean('reverse')}
  >
    {text('Body text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}
  </ThemedExperience>
))

stories.add('Timeline', () => (
  <ThemedTimeline>
    <Experience
      title={text('title', 'Lorem Ipsum')}
      start={dateKnob('start')}
      end={dateKnob('end')}
      position={text('position', 'Full Stack Developer')}
      country={text('country', 'New York')}
    >
      {text('Body text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}
    </Experience>
    <Experience
      title={text('title', 'Lorem Ipsum')}
      start={dateKnob('start')}
      end={dateKnob('end')}
      position={text('position', 'Full Stack Developer')}
      country={text('country', 'New York')}
    >
      {text('Body text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}
    </Experience>
  </ThemedTimeline>
))
