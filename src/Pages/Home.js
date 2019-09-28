import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../Components/NavBar'

class Home extends React.Component{
  render(){
    return(
      <div>
        <NavBar />
        <h>from home page</h>

      </div>
    )
  }
}

export default Home
