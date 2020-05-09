import React, { Fragment } from 'react'

export default function ShowMore({ onClick, dataLngth, displayedPosts }) {
  const endOfPageReached = dataLngth <= displayedPosts
  const lastPostId = dataLngth - (dataLngth - displayedPosts > 0 ? dataLngth - displayedPosts : 0)
  const displayedPostsAreEven = lastPostId % 2 === 0

  return (
    <Fragment>
      <div className={`${displayedPostsAreEven ? 'bg-info' : 'bg-warning'} p-2`}>
        <button
          onClick={onClick}
          className={`btn ${endOfPageReached ? 'btn-secondary' : 'btn-info'} btn-lg btn-block`}
          disabled={endOfPageReached ? 'disabled' : null}
          style={{ cursor: endOfPageReached ? 'default' : 'pointer' }}>
          {endOfPageReached ? 'END OF PAGE' : 'SHOW ME MORE!'}
        </button>
      </div>
    </Fragment>
  )
}
