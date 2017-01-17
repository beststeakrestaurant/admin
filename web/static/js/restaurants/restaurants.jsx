import React from 'react'
import Restaurant from './restaurant'

const tableData = [
  {
    id: 1,
    name: 'STK',
    state: 'published',
    us_state: 'IL',
    city: 'Chicago',
    company: 'STK',
    opentable_id: '22232',
    featured: true,
    created: 'Jan/18/20',
  },
  {
    id: 2,
    name: 'Gibson Steakhouse',
    state: 'published',
    us_state: 'IL',
    city: 'Chicago',
    company: 'Gibson',
    opentable_id: '11132',
    featured: true,
    created: 'Feb/18/20',
  },
  {
    id: 3,
    name: 'Mastro\'s',
    state: 'registered',
    us_state: 'NY',
    city: 'New York',
    company: 'Mastro\'s',
    opentable_id: '21132',
    featured: true,
    created: 'Aug/18/20',
  },
];

const style = {
  height: 100,
  width: 100,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
};

export default class Restaurants extends React.Component {
  state = {
    restaurants: [],
  }

  // handleChange = () => console.log('Change US state')

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        {tableData.map(r => (
          <Restaurant key={r.id} style={style} restaurant={r} />
        ))}
      </div>
    )
  }
}
