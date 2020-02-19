/**
 * @format
 */

import 'react-native'
import React from 'react'
import { mount } from 'enzyme'
import Progress from '.'

// Using Jest + Enzyme
describe('<Divider />', () => {
  it('should render correctly', () => {
    expect(mount(<Progress />)).toHaveLength(1)
  })
  it('should render correctly with title', () => {
    expect(mount(<Progress progress={35} />)).toHaveLength(1)
  })
})
