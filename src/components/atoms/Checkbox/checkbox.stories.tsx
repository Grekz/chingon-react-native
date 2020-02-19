import styled from '@emotion/native'
import React from 'react'
import Checkbox from '.'
import Text, { textType } from '../Text'

const CheckboxStories = () => (
  <StyledView>
    <StyledView>
      <Text textType={textType.H2}>Atom|Checkbox</Text>
    </StyledView>
    <StyledView>
      <Checkbox />
    </StyledView>
  </StyledView>
)

const StyledView = styled.View`
  width: 100%;
  padding-top: 5;
`

export default CheckboxStories
