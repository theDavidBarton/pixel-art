import React, { Fragment } from 'react'
import HomeHeader from './homeHeader'
import HomeBody from './homeBody'
import HomeFooter from './homeFooter'

export default function Wrapper() {
  return (
    <Fragment>
      <HomeHeader />
      <HomeBody />
      <HomeFooter />
    </Fragment>
  )
}
