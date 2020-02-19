/**
 * @format
 */

import 'react-native'
import React from 'react'
import { mount } from 'enzyme'
import Breadcrumbs from '.'
import Text from '../../atoms/Text'

describe('<Breadcrumbs />', () => {
  it('should render correctly', () => {
    expect(mount(<Breadcrumbs />)).toHaveLength(1)
  })
  it('should render correctly with title', () => {
    expect(mount(<Breadcrumbs items={[<Text>Some</Text>]} />)).toHaveLength(1)
  })
})
