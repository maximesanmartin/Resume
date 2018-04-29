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
  renderChildren = () => React.Children.map(this.props.children, (child) => (
    React.cloneElement(child, {
      ...child.props,
      reverse: true
    })
  ))

  render() {
    return (
      <Timeline>
        {this.renderChildren()}
      </Timeline>
    )
  }
}

ExperienceTimeline.propTypes = {
  // TODO custom validator
  children: PropTypes.arrayOf(PropTypes.object)
}

export default ExperienceTimeline
