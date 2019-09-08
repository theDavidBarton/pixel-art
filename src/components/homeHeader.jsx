import React, { Component } from 'react'

class HomeHeader extends Component {
  render() {
    return (
      <div className='bg-dark'>
        <div className='container'>
          <div className='row text-warning pb-5 px-5'>
            <div>
              <img
                className='col d-none d-lg-block'
                style={{ width: '10%' }}
                alt='logo Computer'
                src='img/item-001.png'></img>
            </div>
            <div>
              <h1 className='col'>Pixel art</h1>
            </div>
            <div>
              <p className='col'>
                page made in React.JS
                <br /> with Bootstrap
              </p>
            </div>
            <div className='col'>
              <a href='https://github.com/theDavidBarton/pixel-art'>
                <img
                  style={{ width: '25%' }}
                  alt='github link'
                  src='img/item-002.png'></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeHeader
