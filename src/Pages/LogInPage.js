import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'


class LogInPage extends React.Component{

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
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            <Link to='/signup'> Don't have an account? </Link>
          </Message>
        </Grid.Column>
      </Grid>
  )
}
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: () => dispatch({ type:'LOG_IN' })
  }
}

export default connect(null,mapDispatchToProps)(LogInPage)
