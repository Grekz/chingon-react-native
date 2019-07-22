/**
 * @format
 */

import 'react-native'
import React from 'react'
import { mount } from 'enzyme'
import ButtonGroup from '.'

describe('<ButtonGroup />', () => {
  it('should render correctly', () => {
    expect(mount(<ButtonGroup />)).toHaveLength(1)
  })
  it('should render correctly with title', () => {
    expect(mount(<ButtonGroup items={['one', 'two']} />)).toHaveLength(1)
  })
})
