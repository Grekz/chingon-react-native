import styled from '@emotion/native'
import React from 'react'
import Input from '.'
import Text, { textType } from '../Text'

const InputStories = () => (
  <StyledView>
    <StyledView>
      <Text textType={textType.H2}>Atom|Input</Text>
    </StyledView>
    <StyledView>
      <Input />
    </StyledView>
    <StyledView>
      <Input placeholder="Some text" />
    </StyledView>
  </StyledView>
)

const StyledView = styled.View`
  width: 100%;
  padding-top: 5;
`

export default InputStories
