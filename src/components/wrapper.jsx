import React, { Component } from 'react'
import HomeHeader from './homeHeader'
import HomeBody from './homeBody'

class Wrapper extends Component {
    render() { 
        return (<div>{<HomeHeader />}{<HomeBody />}</div>)
    }
}
 
export default Wrapper
