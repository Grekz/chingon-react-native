/**
 * @format
 */
import 'react-native'
import React from 'react'
import { mount } from 'enzyme'
import Dropdown from '.'
import Text from '../Text'

describe('<Dropdown />', () => {
  it('should render correctly', () => {
    expect(mount(<Dropdown />)).toHaveLength(1)
  })
  it('should render correctly with title', () => {
    expect(
      mount(<Dropdown options={[{ name: 'x', value: 'y' }]} />)
    ).toHaveLength(1)
  })
})
