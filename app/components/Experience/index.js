import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FormattedDate } from 'react-intl'

import Text from '../Text'

const ExperienceWrapper = styled.div`
  & > * {
    padding: 15px;
    margin: 0;
    margin-left: 20px;
  }
`

const ExperienceHeader = styled.h3`
  background: ${({ theme }) => theme.experience.backgroundColor};
  color: ${({ theme }) => theme.experience.color};
  margin-top: 10px;

  :before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      width: 0;
      height: 0;
      border-style: solid;
      margin-top: -15px;
      border-color: ${({ theme }) => theme.experience.backgroundColor} ${({ theme }) => theme.experience.backgroundColor} transparent transparent;
      border-width: 15px;
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
  children
}) => (
  <ExperienceWrapper>
    <ExperienceHeader>{title}</ExperienceHeader>
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
  children: PropTypes.node
}

Experience.displayName = 'Experience'

export default Experience
