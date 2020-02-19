import styled from '@emotion/native'
import React from 'react'
import Dropdown from '.'
import Text, { textType } from '../Text'

const DropdownStories = () => (
  <StyledView>
    <StyledView>
      <Text textType={textType.H2}>Molecule|Dropdown</Text>
    </StyledView>
    <StyledView>
      <Dropdown options={[{ name: 'x', value: 'y' }]} />
    </StyledView>
  </StyledView>
)

const StyledView = styled.View`
  width: 100%;
  padding-top: 5;
`

export default DropdownStories
