import React from 'react'

export default function HomeHeader() {
  return (
    <div className='bg-dark'>
      <div className='container'>
        <div className='text-right position-absolute mr-0 mt-0' style={{ right: 25, top: 5 }}>
          <a href='https://github.com/theDavidBarton/pixel-art' target='_blank' rel='noopener noreferrer'>
            <img style={{ width: '17%' }} alt='github link' src='img/item-002.png'></img>
          </a>
        </div>

        <div className='row text-warning py-4 px-4 pointer-e-none'>
          <div>
            <div className='col lead d-sm-none'>_tDB's</div>
            <div className='col lead d-none d-sm-block'>_theDavidBarton's</div>
            <img className='col' alt='title' src='img/text-001.png'></img>
          </div>
          <div>
            <div className='col'>
              page made in React.JS
              <br /> with Bootstrap
            </div>
          </div>
          <div className='col'></div>
        </div>
      </div>
    </div>
  )
}
