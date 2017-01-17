import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { DropDownMenu, MenuItem, TextField, Checkbox } from 'material-ui'

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
}

export default class Filters extends React.Component {
  state = {
    us_state: 0,
    state: 0,
  }

  handleChange = () => console.log('Change US state')

  render() {
    return (
      <Grid fluid>
        <Row bottom={'xs'}>
          <Col xs={6} sm={4} lg={3} >
            <TextField floatingLabelText="Restaurant name" />
          </Col>
          <Col xs={6} sm={4} lg={3} >
            <TextField floatingLabelText="City" />
          </Col>
          <Col xs={6} sm={4} lg={2} >
            <DropDownMenu value={this.state.state} onChange={this.handleChange}>
              <MenuItem value={0} primaryText="--state--" />
              <MenuItem value={1} primaryText="published" />
              <MenuItem value={2} primaryText="registered" />
            </DropDownMenu>
          </Col>
          <Col xs={6} sm={4} lg={2} >
            <DropDownMenu value={this.state.us_state} onChange={this.handleChange}>
              <MenuItem value={0} primaryText="--US state--" />
              <MenuItem value={1} primaryText="AL" />
              <MenuItem value={2} primaryText="NY" />
            </DropDownMenu>
          </Col>
          <Col xs={6} sm={4} lg={2}>
            <Checkbox
              label="Listed in BSR"
              style={styles.checkbox}
            />
          </Col>

          <Col xs={6} sm={4} lg={2} >
            <Checkbox
              label="Featured"
              style={styles.checkbox}
            />
          </Col>
        </Row>
      </Grid>
    )
  }
}
