import React from 'react'

const Carousel = props => {
  return (
    <div className='col text-center py-sm-5 py-3 order-6 order-md-0'>
      <img className='py-0 max-img-width' alt={props.data.alt} src={props.data.src}></img>
    </div>
  )
}

export default Carousel
