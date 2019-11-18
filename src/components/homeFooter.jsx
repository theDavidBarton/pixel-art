import React, { Component } from 'react'

class HomeFooter extends Component {
  render() {
    return (
      <div className='bg-dark'>
        <div className='container text-warning'>
          <div className='text-center'>
            |
            <a href='https://github.com/theDavidBarton/pixel-art' target='_blank' className='text-info'>
              GitHub
            </a>
            |
            <a href='https://www.linkedin.com/in/thedavidbarton/' target='_blank' className='text-info'>
              LinkedIn
            </a>
            |
          </div>
          <div className='text-center'>copyright © theDavidBarton, 2019</div>
        </div>
      </div>
    )
  }
}

export default HomeFooter
