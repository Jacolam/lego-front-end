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

    let data = this.state

    fetch('http://localhost:3000/api/v1/log', {
      method: 'POST',
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then( data => console.log(data ))
  }
  render(){
    return(
      <div className='log-event'>
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
