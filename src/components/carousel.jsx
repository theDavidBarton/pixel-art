import React, { Component } from 'react'

class Carousel extends Component {
  render() {
    return (
      <div className='col py-5'>
        <img alt={this.props.data.alt} src={this.props.data.src} width='350px'></img>
      </div>
    )
  }
}

export default Carousel
