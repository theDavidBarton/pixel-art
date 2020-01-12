import React, { Component, Fragment } from 'react'

class ShowMore extends Component {
  // _TODO: it requires lifting up state, will be activated in another round
  state = {
    displayedPosts: 5,
    readMoreIsOpened: false
  }

  setDisplayedPosts = () => {
    this.setState({ displayedPosts: this.state.displayedPosts.length + 5, readMoreIsOpened: true })
  }

  render() {
    return (
      <Fragment>
        <div>
          <div className='container position-absolute' style={{ bottom: 'auto' }}>
            <button
              onClick={this.setDisplayedPosts}
              className='btn btn-dark text-light position-absolute'
              style={{ bottom: '30px' }}>
              SHOW ME MORE!
            </button>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default ShowMore
