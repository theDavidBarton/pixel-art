import React, { Component, Fragment } from 'react'
import Carousel from './carousel'
import BodyText from './bodyText'
import content from '../content.json'

class HomeBody extends Component {
  state = {
    data: content.pods
  }

  idIsEven(id) {
    return id % 2 === 0
  }

  render() {
    return (
      <Fragment>
        {this.state.data.map(pod =>
          this.idIsEven(pod.id) ? (
            <Fragment key={pod.id}>
              <div className='bg-info'>
                <div className='container'>
                  <div className='row d-flex flex-wrap align-items-center even-color'>
                    <Carousel data={pod.img} />
                    <BodyText data={pod.text} tags={pod.tags} />
                  </div>
                </div>
              </div>
            </Fragment>
          ) : (
            <Fragment key={pod.id}>
              <div className='bg-warning'>
                <div className='container'>
                  <div className='row d-flex flex-wrap align-items-center odd-color'>
                    <BodyText data={pod.text} tags={pod.tags} />
                    <Carousel data={pod.img} />
                  </div>
                </div>
              </div>
            </Fragment>
          )
        )}
      </Fragment>
    )
  }
}

export default HomeBody
