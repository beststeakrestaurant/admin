import React from 'react'
import { Paper } from 'material-ui'

export default class Restaurant extends React.Component {
  static propTypes = {
    restaurant: React.PropTypes.object.isRequired,
    style: React.PropTypes.object,
  };
  render() {
    return (
      <Paper key={this.props.restaurant.id} style={this.props.style} zDepth={1}>
        {this.props.restaurant.name}
      </Paper>
    )
  }
}
