import styled from '@emotion/native'
import React, { useState } from 'react'
import { Text, TouchableHighlight } from 'react-native'
export const getFnWithBool = (fn, bool) => () => fn(bool)

const Modal = ({ renderingElement, children, ...props }) => {
  const [showModal, setShowModal] = useState(false)
  const [showFn, hideFn] = [
    getFnWithBool(setShowModal, true),
    getFnWithBool(setShowModal, false),
  ]
  const modalConfig = {
    animationType: 'fade',
    onRequestClose: hideFn,
    transparent: true,
    visible: showModal,
  }
  return (
    <>
      <TouchableHighlight onPress={showFn}>
        {renderingElement}
      </TouchableHighlight>
      <StyledModal {...modalConfig}>
        <StyledView>
          <Text onPress={hideFn}>Close</Text>
          {children}
        </StyledView>
      </StyledModal>
    </>
  )
}

const StyledModal = styled.Modal`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
`
const StyledView = styled.View`
  background: #999;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 50%;
  height: 50%;
  margin: 50px;
`
export default Modal
