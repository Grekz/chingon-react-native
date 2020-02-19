/**
 * @format
 */

import 'react-native'
import React from 'react'
import { mount } from 'enzyme'
import Modal, { getFnWithBool } from '.'
import Text from '../../atoms/Text'

// Using Jest + Enzyme
describe('<Text />', () => {
  it('should pass the children', () => {
    expect(
      mount(
        <Modal renderingElement={<Text>Click me</Text>}>
          <Text>Default</Text>
        </Modal>
      ).text()
    ).toBe('Click meCloseDefault')
  })
  it('should call with fn with boolean', () => {
    const mockedFn = jest.fn()
    getFnWithBool(mockedFn, true)()
    expect(mockedFn).toHaveBeenCalledWith(true)
    getFnWithBool(mockedFn, false)()
    expect(mockedFn).toHaveBeenCalledWith(false)
  })
})
