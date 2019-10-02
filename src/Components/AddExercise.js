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
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              name='name'
              onChange={this.handleChange}
              width= '1'
            />
          </label>
          <label>
            Reps:
            <input
              type="number"
              value={this.state.value}
              name='reps'
              onChange={this.handleChange}
            />
          </label>
          <label>
            Weight:
            <input
              type="number"
              value={this.state.value}
              name='weight'
              onChange={this.handleChange}
            />
          </label>
          <label>
            RPE:
            <input
              type="number"
              value={this.state.value}
              name='rpe'
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>

      </div>
    )
  }
}

export default AddExercise
