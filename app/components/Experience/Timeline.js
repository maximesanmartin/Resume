import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Timeline = styled.div`
  display: block;

  & > * {
    width: 45%;
    position: relative;

    &:nth-child(2n) {
      float: right;
    }
  }
`

class ExperienceTimeline extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Timeline>
        {this.props.children}
      </Timeline>
    )
  }
}

ExperienceTimeline.propTypes = {
  // TODO custom validator
  children: PropTypes.arrayOf(PropTypes.object)
}

export default ExperienceTimeline
