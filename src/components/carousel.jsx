import React, { Component } from 'react'

class Carousel extends Component {
  render() {
    return (
      <div className='col text-center py-5 order-12 order-md-0'>
        <img className='py-4' alt={this.props.data.alt} src={this.props.data.src} width={this.props.data.width}></img>
      </div>
    )
  }
}

export default Carousel
