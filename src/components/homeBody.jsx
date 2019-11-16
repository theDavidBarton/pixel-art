import React, { Component, Fragment } from 'react'
import Carousel from './carousel'
import BodyText from './bodyText'
import Tags from './tags'
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
                  <div className='row'>
                    <Carousel data={pod.img} />
                    <BodyText data={pod.text} />
                    <Tags data={pod.tags} />
                  </div>
                </div>
              </div>
            </Fragment>
          ) : (
            <Fragment key={pod.id}>
              <div className='bg-warning'>
                <div className='container'>
                  <div className='row'>
                    <BodyText data={pod.text} />
                    <Carousel data={pod.img} />
                    <Tags data={pod.tags} />
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
