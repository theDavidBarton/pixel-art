import React, { Component } from 'react'
import HomeHeader from './homeHeader'
import HomeBody from './homeBody'
import HomeFooter from './homeFooter'

class Wrapper extends Component {
  render() {
    return (
      <div>
        {<HomeHeader />}
        {<HomeBody />}
        {<HomeFooter />}
      </div>
    )
  }
}

export default Wrapper
