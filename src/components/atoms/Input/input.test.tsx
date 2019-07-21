/**
 * @format
 */
import 'react-native'
import React from 'react'
import { mount } from 'enzyme'
import Input from '.'

describe('<Alert />', () => {
  it('should render correctly', () => {
    expect(mount(<Input />)).toHaveLength(1)
  })
})
