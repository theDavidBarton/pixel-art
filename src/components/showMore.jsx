import React, { useState, Fragment } from 'react'

const ShowMore = () => {
  // _TODO: it requires lifting up state, will be activated in another round
  const [displayedPosts, setDisplayedPosts] = useState(5)
  const [readMoreIsOpened, setReadMoreIsOpened] = false

  const handleClick = () => {
    setDisplayedPosts(displayedPosts + 5)
    setReadMoreIsOpened((readMoreIsOpened = true))
  }

  return (
    <Fragment>
      <div>
        <div className='container position-absolute' style={{ bottom: 'auto' }}>
          <button
            onClick={handleClick}
            className='btn btn-dark text-light position-absolute'
            style={{ bottom: '30px' }}>
            SHOW ME MORE!
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default ShowMore
