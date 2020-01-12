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
          <div className='col p-4 order-1 order-md-0'>
            <h2 className='text-uppercase'>{this.props.data.h2.replace('[year]', this.currentYear())}</h2>
            <p className='lead'>{this.props.data.pLead}</p>
            <p>
              {this.props.data.p}{' '}
              {this.props.data.a ? (
                <a href={this.props.data.a.href} target='_blank' rel='noopener noreferrer'>
                  {this.props.data.a.text}
                </a>
              ) : null}
            </p>
            <Tags tags={this.props.tags} />
          </div>
        ) : null}
      </Fragment>
    )
  }
}

export default BodyText
