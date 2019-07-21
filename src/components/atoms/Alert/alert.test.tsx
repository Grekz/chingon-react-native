/**
 * @format
 */
import 'react-native'
import React from 'react'
import { mount } from 'enzyme'
import Alert from '.'
import Text from '../Text'

describe('<Alert />', () => {
  it('should render correctly', () => {
    expect(mount(<Alert />)).toHaveLength(1)
  })
  it('should render correctly with title', () => {
    expect(
      mount(<Alert><Text>Show me</Text></Alert>)
    ).toHaveLength(1)
  })
})
