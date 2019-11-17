import React, { Component, Fragment } from 'react'

class Tags extends Component {
  render() {
    return (
      <Fragment>
        {this.props.tags.map((pod, i) =>
          pod ? (
            <div key={i++} className='badge-pill badge-dark float-left'>
              # {pod}_
            </div>
          ) : null
        )}
      </Fragment>
    )
  }
}

export default Tags
