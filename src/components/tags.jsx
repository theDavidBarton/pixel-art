import React, { Component, Fragment } from 'react'

class Tags extends Component {
  render() {
    return (
      <Fragment>
        {this.props.data.map((pod, i) => (
          <div key={i++} className='badge-pill badge-dark' style={{ position: 'absolute', right: 0 }}>
            # {pod}
          </div>
        ))}
      </Fragment>
    )
  }
}

export default Tags
