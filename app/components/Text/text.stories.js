import React from 'react'
import { select } from '@storybook/addon-knobs'

import Text from './'
import { createDefaultStories, themeComponent } from '../stories/utils'

const ThemedText = themeComponent('Text', Text)

const stories = createDefaultStories('Text', Text)
stories.add('H1 Text', () => (
  <ThemedText is={select('is', Array.from({ length: 6 }, (x, i) => `h${i}`), 'h1')}>
    Hey There !
  </ThemedText>
))
