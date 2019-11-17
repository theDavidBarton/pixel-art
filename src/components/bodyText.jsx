import React, { Component, Fragment } from 'react'
import Tags from './tags'

class BodyText extends Component {
  // fun with Prehistoric 2 easter egg
  currentYear = () => {
    return new Date().getFullYear()
  }

  render() {
    return (
      <Fragment>
        {this.props.data.h2 ? (
          <div className='col py-5 px-5'>
            <h2 className='text-uppercase'>{this.props.data.h2.replace('[year]', this.currentYear())}</h2>
            <p className='lead'>{this.props.data.pLead}</p>
            <p>{this.props.data.p}</p>
            <Tags tags={this.props.tags} />
          </div>
        ) : null}
      </Fragment>
    )
  }
}

export default BodyText
