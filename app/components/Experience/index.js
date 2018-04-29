import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FormattedDate } from 'react-intl'

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
      top: 10px;
      border-color: ${({ theme }) => theme.experience.backgroundColor} ${({ theme }) => theme.experience.backgroundColor} transparent transparent;
      border-width: 15px;
  }
`

const ExperienceBody = styled.p`
  border: 2px solid #BFBFBF;
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
  children
}) => (
  <ExperienceWrapper>
    <ExperienceHeader>Lorem Ipsum</ExperienceHeader>
    <ExperienceBody>
      {/* TODO Text component */}
      <b><FormattedDate value={start} {...DATE_FORMAT} /> - {end ? <FormattedDate value={end} {...DATE_FORMAT} /> : '?'}</b><br />
      <b>{position} - {country}</b><br />
      {children}
    </ExperienceBody>
  </ExperienceWrapper>
)

Experience.propTypes = {
  start: PropTypes.object,
  end: PropTypes.object,
  position: PropTypes.string,
  country: PropTypes.string,
  children: PropTypes.node
}

export default Experience
