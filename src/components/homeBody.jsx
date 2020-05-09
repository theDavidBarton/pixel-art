import React, { useState, Fragment } from 'react'
import Carousel from './carousel'
import BodyText from './bodyText'
import ShowMore from './showMore'
import content from '../content.json'

export default function HomeBody() {
  // content, pod's data:
  const [data] = useState(content.pods)
  const [dataLngth] = useState(content.pods.length)
  // readmore:
  const [displayedPosts, setDisplayedPosts] = useState(5)

  const showMorePosts = () => {
    setDisplayedPosts(displayedPosts + 5)
  }

  const idIsEven = id => {
    return id % 2 === 0
  }

  return (
    <Fragment>
      {data.slice(0, displayedPosts).map(pod =>
        idIsEven(pod.id) ? (
          <Fragment key={pod.id}>
            <div className='bg-info'>
              <div className='container'>
                <div className='row d-flex flex-wrap align-items-center even-color'>
                  {pod.img.src ? <Carousel data={pod.img} /> : null}
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
                  {pod.img.src ? <Carousel data={pod.img} /> : null}
                </div>
              </div>
            </div>
          </Fragment>
        )
      )}
      <ShowMore onClick={showMorePosts} dataLngth={dataLngth} displayedPosts={displayedPosts} />
    </Fragment>
  )
}
