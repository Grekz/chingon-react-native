/**
 * @format
 */

import 'react-native'
import React from 'react'
import { mount } from 'enzyme'
import ListItem from '.'
import Text from '../Text'

describe('<ListItem />', () => {
  it('should render correctly', () => {
    expect(mount(<ListItem />)).toHaveLength(1)
  })
  it('should render correctly with title', () => {
    expect(
      mount(
        <ListItem>
          <Text>Some</Text>
        </ListItem>
      )
    ).toHaveLength(1)
  })
})
