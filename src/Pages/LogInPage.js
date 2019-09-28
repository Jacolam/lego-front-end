import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'


class LogInPage extends React.Component{

  state={
    username:'',
    password:'',
    login: true
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    if(this.state.login){
      fetch('http://localhost:3000/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state)
      })
      .then(res => res.json())
      .then(data => {
        if(!!data.message){
          alert('wrong information')
        } else {
          localStorage.setItem('current_user', data.user.username)
          localStorage.setItem('token', data.jwt)
          window.location.replace(`http://localhost:3001/home`)
          }
        })
    } else {
      // sign up fetch request
      fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(data => {
      //will push user to login page after creating]
      if (!!data.error){
        alert('Account already exists')
      } else {
        localStorage.setItem('current_user', data.user.username)
        localStorage.setItem('token', data.jwt)
        window.location.replace(`http://localhost:3001/home`)
      }
    })
    }
  }

  handleForm = e => {
    // switching between login form and sign up form
    this.setState({
      login: !this.state.login
    })
  }

  render(){
    return(
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='blue' textAlign='center'>
              Welcome to Wink
            </Header>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid icon='user'
                  iconPosition='left'
                  placeholder='Username'
                  name='username'
                  onChange={this.handleChange}
                  />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  name='password'
                  onChange={this.handleChange}
                />

              <Button color='blue' fluid size='large'>
                { this.state.login ? ('Log In') : ('Sign Up!') }
              </Button>
              </Segment>
            </Form>
            <Message>
              <Button color='red' onClick={this.handleForm}>
                { this.state.login ? (`Don't Have An Account?`):(`Already Have An Account?`)}
              </Button>
            </Message>
          </Grid.Column>
        </Grid>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     signIn: () => dispatch({ type:'LOG_IN' })
//   }
// }

export default LogInPage
