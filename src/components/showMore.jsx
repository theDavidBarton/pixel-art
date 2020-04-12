import React, { Fragment } from 'react'

export default function ShowMore({ onClick, dataLngth, displayedPosts }) {
  return (
    <Fragment>
      <div>
        <div className='container position-absolute text-sm-center'>
          <button
            onClick={onClick}
            className='btn btn-dark position-absolute'
            disabled={dataLngth < displayedPosts ? 'disabled' : null}
            style={{ bottom: '30px' }}>
            SHOW ME MORE!
          </button>
        </div>
      </div>
    </Fragment>
  )
}
