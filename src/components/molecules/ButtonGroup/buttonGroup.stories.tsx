import styled from '@emotion/native'
import React from 'react'
import ButtonGroup from '.'
import Text, { textType } from '../../atoms/Text'

const ButtonGroupStories = () => (
  <StyledView>
    <StyledView>
      <Text textType={textType.H2}>Molecule|ButtonGroup</Text>
    </StyledView>
    <StyledView>
      <ButtonGroup items={['one', 'two', 'three']} />
    </StyledView>
  </StyledView>
)

const StyledView = styled.View`
  width: 100%;
  padding-top: 5;
`

export default ButtonGroupStories
