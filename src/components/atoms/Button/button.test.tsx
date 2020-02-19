/**
 * @format
 */

import 'react-native'
import React from 'react'
import { mount } from 'enzyme'
import Button from '.'

// Using Jest + Enzyme
describe('<Button />', () => {
  it('should render correctly', () => {
    expect(mount(<Button />)).toHaveLength(1)
  })
  it('should write as text', () => {
    expect(mount(<Button title="something" />).text()).toBe('something')
  })
})
