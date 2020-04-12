import React from 'react'

const Carousel = props => {
  return (
    <div className='col text-center py-sm-5 py-3 order-6 order-md-0'>
      <img className='py-0' alt={props.data.alt} src={props.data.src} style={{ maxWidth: '350px' }}></img>
    </div>
  )
}

export default Carousel
