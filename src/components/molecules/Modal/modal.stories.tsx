import styled from '@emotion/native'
import React from 'react'
import Modal from '.'
import Text, { textType } from '../../atoms/Text'

const ModalStories = () => (
  <StyledView>
    <StyledView>
      <Text textType={textType.H2}>Molecule|Modal</Text>
      <Modal renderingElement={<Text>Click me</Text>}>
        <Text>Default</Text>
      </Modal>
    </StyledView>
  </StyledView>
)

const StyledView = styled.View`
  width: 100%;
`

export default ModalStories
