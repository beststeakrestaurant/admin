import React from 'react'
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'
import { Toolbar, ToolbarGroup, ToolbarTitle, ToolbarSeparator, DropDownMenu, MenuItem, IconMenu, FontIcon, RaisedButton, IconButton } from 'material-ui'

export default class Filters extends React.Component {
  state = {
    value: 3,
  }

  handleChange = () => console.log('Gigi')

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild >
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="All Broadcasts" />
            <MenuItem value={2} primaryText="All Voice" />
            <MenuItem value={3} primaryText="All Text" />
            <MenuItem value={4} primaryText="Complete Voice" />
            <MenuItem value={5} primaryText="Complete Text" />
            <MenuItem value={6} primaryText="Active Voice" />
            <MenuItem value={7} primaryText="Active Text" />
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text="Options" />
          <FontIcon className="material-icons">sort</FontIcon>
          <ToolbarSeparator />
          <RaisedButton label="Create Broadcast" primary />
          <IconMenu
            iconButtonElement={
              <IconButton >
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="Download" />
            <MenuItem primaryText="More Info" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    )
  }
}
