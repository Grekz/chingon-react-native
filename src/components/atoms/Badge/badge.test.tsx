/**
 * @format
 */

import 'react-native'
import React from 'react'
import { mount } from 'enzyme'
import Badge from '.'

// Using Jest + Enzyme
describe('<Badge />', () => {
  it('should render correctly', () => {
    expect(mount(<Badge />)).toHaveLength(1)
  })
  it('should render correctly with title', () => {
    expect(
      mount(<Badge>99+</Badge>)
    ).toHaveLength(1)
  })
})
