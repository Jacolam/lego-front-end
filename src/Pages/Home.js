import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import AddExercise from '../Components/AddExercise'

class Home extends React.Component{
  render(){
    return(
      <div>
        <NavBar />
        <AddExercise />
        <h>from home page</h>

      </div>
    )
  }
}

export default Home
