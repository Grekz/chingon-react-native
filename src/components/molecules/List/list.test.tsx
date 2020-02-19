/**
 * @format
 */

import 'react-native'
import React from 'react'
import { mount } from 'enzyme'
import List from '.'
import Text from '../../atoms/Text'

describe('<ListItem />', () => {
  it('should render correctly', () => {
    expect(mount(<List />)).toHaveLength(1)
  })
  it('should render correctly with title', () => {
    expect(mount(<List items={[<Text>Some</Text>]} />)).toHaveLength(1)
  })
})
