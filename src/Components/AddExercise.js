import React from 'react'

class AddExercise extends React.Component{

  state={
    name:'',
    reps:'',
    weight:'',
    rpe:'',

  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    },()=>(console.log(this.state)))
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch()
  }
  render(){
    return(
      <div class='log-event'>
        <div>
          Name:
          <br/>
          Reps:
          <br/>
          Weight:
          <br/>
          RPE:
        </div>
        <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.value}
              name='name'
              onChange={this.handleChange}
              width= '1'
            />
            <input
              type="number"
              value={this.state.value}
              name='reps'
              onChange={this.handleChange}
            />
            <input
              type="number"
              value={this.state.value}
              name='weight'
              onChange={this.handleChange}
            />
            <input
              type="number"
              value={this.state.value}
              name='rpe'
              onChange={this.handleChange}
            />
          <input type="submit" value="Submit" />
        </form>

      </div>
    )
  }
}

export default AddExercise
