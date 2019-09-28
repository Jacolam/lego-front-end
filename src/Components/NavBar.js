import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'


class NavBar extends React.Component{

  signOut = () => {
    // clears token and redirects to login page
    localStorage.clear()
    window.location.replace(`http://localhost:3001/login`)
  }

  render(){
    return(
      <div>
        <Menu color='orange' inverted>
          <Menu.Item>
            <Link to="/home">
              Home
              <Icon name='home'/>
            </Link><br/>
          </Menu.Item>

          <Menu.Item>
            <Link to="/programs">
              <Icon name='address book' size='large'/>
            </Link><br/>
          </Menu.Item>

          <Menu.Item>
            <Link to="/search">
              <Icon name="search" size="large"/>
            </Link><br/>
          </Menu.Item>

          <Menu.Item>
            <Link to="/settings">
              <Icon name='settings' size='large'/>
            </Link><br/>
          </Menu.Item>

          <Menu.Item name='Sign Out' onClick={this.signOut} position='right'>
            Sign Out<Icon name='log out' />
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default NavBar
