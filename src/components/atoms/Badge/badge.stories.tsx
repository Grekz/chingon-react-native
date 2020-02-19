import styled from '@emotion/native'
import React from 'react'
import Badge from '.'
import Text, { textType } from '../Text'

const BadgeStories = () => (
  <StyledView>
    <StyledView>
      <Text textType={textType.H2}>Atom|Badge</Text>
    </StyledView>
    <StyledView>
      <Text>Something</Text>
      <Badge />
    </StyledView>
    <StyledView>
      <Text>Number</Text>
      <Badge>99+</Badge>
    </StyledView>
  </StyledView>
)

const StyledView = styled.View`
  width: 100%;
  padding-top: 5;
`

export default BadgeStories
