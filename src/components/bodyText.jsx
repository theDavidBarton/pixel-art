import React, { Fragment } from 'react'
import Tags from './tags'

const BodyText = props => {
  // fun with Prehistoric 2 easter egg
  const currentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <Fragment>
      {props.data.h2 ? (
        <div className='col p-4 order-1 order-md-0'>
          <h2 className='text-uppercase'>{props.data.h2.replace('[year]', currentYear())}</h2>
          <p className='lead'>{props.data.pLead}</p>
          <p>
            {props.data.p}{' '}
            {props.data.a ? (
              <a href={props.data.a.href} target='_blank' rel='noopener noreferrer'>
                {props.data.a.text}
              </a>
            ) : null}
          </p>
          <Tags tags={props.tags} />
        </div>
      ) : null}
    </Fragment>
  )
}

export default BodyText
