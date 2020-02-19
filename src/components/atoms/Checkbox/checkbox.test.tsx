/**
 * @format
 */

import 'react-native'
import React from 'react'
import { mount } from 'enzyme'
import Checkbox from '.'

// Using Jest + Enzyme
describe('<Divider />', () => {
  it('should render correctly', () => {
    expect(mount(<Checkbox />)).toHaveLength(1)
  })
  it('should render correctly with title', () => {
    expect(mount(<Checkbox checked />)).toHaveLength(1)
  })
})
