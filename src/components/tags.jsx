import React, { Component, Fragment } from 'react'

class Tags extends Component {
  render() {
    return (
      <Fragment>
        {this.props.tags.map((pod, i) => (
          <div key={i++} className='badge-pill badge-dark' style={{ float: 'left' }}>
            # {pod}_
          </div>
        ))}
      </Fragment>
    )
  }
}

export default Tags
