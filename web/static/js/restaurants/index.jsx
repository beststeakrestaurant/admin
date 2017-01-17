import React from 'react'
import { Divider } from 'material-ui'
import Filters from './filters'
import Restaurants from './restaurants'

const RestaurantsIndex = () =>
  <div>
    <Filters />
    <Divider style={{ marginTop: '30px' }} />
    <Restaurants />
  </div>

module.exports = RestaurantsIndex
