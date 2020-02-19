/**
 * @format
 */

import 'react-native'
import React from 'react'
import { mount } from 'enzyme'
import Avatar from '.'

// Using Jest + Enzyme
describe('<Card />', () => {
  it('should render correctly', () => {
    expect(mount(<Avatar />)).toHaveLength(1)
  })
  it('should render correctly with title', () => {
    expect(
      mount(<Avatar uri="https://randomuser.me/api/portraits/men/35.jpg" />)
    ).toHaveLength(1)
  })
})
