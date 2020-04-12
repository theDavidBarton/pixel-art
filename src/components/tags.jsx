import React, { Fragment } from 'react'

export default function Tags(props) {
  return (
    <Fragment>
      {props.tags.map((pod, i) =>
        pod ? (
          <div key={i++} className='badge-pill badge-dark float-left m-1'>
            # {pod}
          </div>
        ) : null
      )}
    </Fragment>
  )
}
