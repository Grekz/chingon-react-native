/**
 * @format
 */

import 'react-native'
import React from 'react'
import { mount } from 'enzyme'
import Header from '.'
import Text from '../../atoms/Text'

describe('<Header />', () => {
  it('should render correctly', () => {
    expect(mount(<Header />)).toHaveLength(1)
  })
  it('should render correctly with title', () => {
    expect(mount(<Header items={[<Text>Some</Text>]} />)).toHaveLength(1)
  })
})
