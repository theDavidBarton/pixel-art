import React, { Fragment } from 'react'

export default function ShowMore({ onClick, dataLngth, displayedPosts }) {
  const endOfPageReached = dataLngth < displayedPosts

  return (
    <Fragment>
      <div className='bg-warning p-2'>
        <button
          onClick={onClick}
          className={`btn ${endOfPageReached ? 'btn-secondary' : 'btn-info'} btn-lg btn-block`}
          disabled={endOfPageReached ? 'disabled' : null}>
          {endOfPageReached ? 'END OF PAGE' : 'SHOW ME MORE!'}
        </button>
      </div>
    </Fragment>
  )
}
