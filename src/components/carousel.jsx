import React, { Component } from 'react'

class Carousel extends Component {
  render() {
    return (
      <div className='col text-center py-sm-5 py-3 order-6 order-md-0'>
        <img className='py-0' alt={this.props.data.alt} src={this.props.data.src} style={{ maxWidth: '350px' }}></img>
      </div>
    )
  }
}

export default Carousel
