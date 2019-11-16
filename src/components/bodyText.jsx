import React, { Component } from 'react'
import Tags from './tags'

class BodyText extends Component {
  render() {
    return (
      <div className='col py-5 px-5'>
        <h2>{this.props.data.h2}</h2>
        <p className='lead'>{this.props.data.pLead}</p>
        <p>{this.props.data.p}</p>
        <Tags tags={this.props.tags} />
      </div>
    )
  }
}

export default BodyText
