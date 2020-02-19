/**
 * @format
 */

import 'react-native'
import React from 'react'
import { mount } from 'enzyme'
import Divider from '.'

// Using Jest + Enzyme
describe('<Divider />', () => {
  it('should render correctly', () => {
    expect(mount(<Divider />)).toHaveLength(1)
  })
  it('should render correctly with title', () => {
    expect(mount(<Divider color="red" />)).toHaveLength(1)
  })
})
