import React from 'react'
import { Link } from 'react-router'
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';


const NavigationDrawer = props =>
  <Drawer
    docked={false}
    width={200}
    open={props.open}
    onRequestChange={props.onChange}
  >
    <MenuItem onTouchTap={props.handleClose} containerElement={<Link to="/" />}>Dashboard</MenuItem>
    <MenuItem onTouchTap={props.handleClose} containerElement={<Link to="/companies" />}>Companies</MenuItem>
    <MenuItem onTouchTap={props.handleClose} containerElement={<Link to="/restaurants" />}>Restaurants</MenuItem>
    <MenuItem onTouchTap={props.handleClose}>Articles</MenuItem>
    <MenuItem onTouchTap={props.handleClose}>National Site</MenuItem>
  </Drawer>

NavigationDrawer.propTypes = {
  open: React.PropTypes.bool.isRequired,
  onChange: React.PropTypes.func.isRequired,
  handleClose: React.PropTypes.func.isRequired,
}

module.exports = NavigationDrawer
