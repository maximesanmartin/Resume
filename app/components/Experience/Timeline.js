import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Timeline = styled.div`
  display: block;
`

class ExperienceTimeline extends React.Component {
  renderChildren = () => {
    const EXPERIENCE_HEIGHT = 160
    return React.Children.map(this.props.children, (child, index) => (
      React.cloneElement(child, {
        ...child.props,
        reverse: (index + 1) % 2,
        style: {
          right: index % 2 ? '0px' : undefined,
          top: `${(index * 50) + (Math.floor(index / 2) * EXPERIENCE_HEIGHT)}px`,
          width: '45%',
          position: 'absolute'
        }
      })
    ))
  }

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
