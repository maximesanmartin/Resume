import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { FormattedDate } from 'react-intl'

import Text from '../Text'

const ExperienceWrapper = styled.div`
  & > * {
    padding: 15px;
    margin: 0 20px;
  }
`

const cursorPosition = ({ reverse, theme }) => {
  const THEME_COLOR = (theme && theme.experience && theme.experience.backgroundColor) || '#3F3F3F'
  const style = [{
    [reverse ? 'right' : 'left']: 0,
    borderTopColor: THEME_COLOR,
    borderBottomColor: 'transparent',
    borderRightColor: reverse ? 'transparent' : THEME_COLOR,
    borderLeftColor: reverse ? THEME_COLOR : 'transparent'
  }]
  return css(style)
}

const ExperienceHeader = styled.h3`
  background: ${({ theme }) => theme.experience.backgroundColor};
  color: ${({ theme }) => theme.experience.color};
  margin-top: 10px;

  :before {
      content: '';
      display: block;
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      margin-top: -15px;
      border-width: 15px;
      ${cursorPosition}
  }
`

const ExperienceBody = styled.div`
  border: 2px solid #BFBFBF;
  border-top: 0;
`

const DATE_FORMAT = {
  year: 'numeric',
  month: 'long',
  day: '2-digit'
}

const Experience = ({
  start,
  end,
  position,
  country,
  title,
  reverse,
  children
}) => (
  <ExperienceWrapper>
    <ExperienceHeader reverse={reverse}>{title}</ExperienceHeader>
    <ExperienceBody>
      <Text is='h4' my={1}><FormattedDate value={start} {...DATE_FORMAT} /> - {end ? <FormattedDate value={end} {...DATE_FORMAT} /> : '?'}</Text>
      <Text is='h4' my={1}>{position} - {country}</Text>
      <Text is='span'>{children}</Text>
    </ExperienceBody>
  </ExperienceWrapper>
)

Experience.propTypes = {
  start: PropTypes.object,
  end: PropTypes.object,
  position: PropTypes.string,
  country: PropTypes.string,
  title: PropTypes.node,
  reverse: PropTypes.bool,
  children: PropTypes.node
}

Experience.displayName = 'Experience'

export default Experience
