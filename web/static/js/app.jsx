import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppBar } from 'material-ui'

import NavigationDrawer from './navigation_drawer'

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
  }

  state = {
    drawerOpen: false,
  }

  handleToggle = () => this.setState({ drawerOpen: !this.state.drawerOpen })
  handleClose = () => this.setState({ drawerOpen: false })

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavigationDrawer
            open={this.state.drawerOpen}
            onChange={this.handleClose}
            handleClose={this.handleClose}
          />
          <AppBar
            title="Best Steak Restaurant Admin"
            onLeftIconButtonTouchTap={this.handleToggle}
          />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}
