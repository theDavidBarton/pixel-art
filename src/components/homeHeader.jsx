import React, { Component } from 'react'

class HomeHeader extends Component {
  render() {
    return (
      <div className='bg-dark'>
        <div className='container'>
          <div className='text-right position-absolute mr-0 mt-0' style={{ right: 25, top: 5 }}>
            <a href='https://github.com/theDavidBarton/pixel-art'>
              <img style={{ width: '17%' }} alt='github link' src='img/item-002.png'></img>
            </a>
          </div>

          <div className='row text-warning py-4 px-4'>
            <div>
              <p className='col lead d-sm-none'>_tDB's</p>
              <p className='col lead d-none d-sm-block'>_theDavidBarton's</p>
              <img className='col' alt='title' src='img/text-001.png'></img>
            </div>
            <div>
              <p className='col'>
                page made in React.JS
                <br /> with Bootstrap
              </p>
            </div>
            <div className='col'></div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeHeader
