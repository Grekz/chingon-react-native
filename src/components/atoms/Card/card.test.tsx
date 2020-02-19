/**
 * @format
 */

import 'react-native'
import React from 'react'
import { mount } from 'enzyme'
import Card from '.'
import Text from '../Text'

// Using Jest + Enzyme
describe('<Card />', () => {
  it('should render correctly', () => {
    expect(mount(<Card />)).toHaveLength(1)
  })
  it('should render correctly with title', () => {
    expect(mount(<Card title="Something" />)).toHaveLength(1)
  })
  it('should render with text', () => {
    expect(
      mount(
        <Card>
          <Text>Hello</Text>
        </Card>
      ).text()
    ).toBe('Hello')
  })
})
