import React, { Component } from 'react'
import { Carousel1, Carousel2 } from './carousel'
import BodyText from './bodyText'

class HomeBody extends Component {
  render() { 
    return (
      <React.Fragment>
        <div className="bg-warning">
          <div className="container">
            <div className="row">
              <BodyText /><Carousel1 />
            </div>
          </div>
        </div>
        <div className="bg-info">
          <div className="container">
            <div className="row">
              <Carousel2 /><BodyText />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
 
export default HomeBody