/**
 * @format
 */

import 'react-native'
import React from 'react'
import { mount } from 'enzyme'
import Text from '.'

// Using Jest + Enzyme
describe('<Text />', () => {
  it('should render correctly', () => {
    expect(mount(<Text />)).toHaveLength(1)
  })
  it('should pass the children', () => {
    expect(mount(<Text>x</Text>).text()).toBe('x')
  })
})
