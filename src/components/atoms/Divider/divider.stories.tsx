import styled from '@emotion/native'
import React from 'react'
import Divider from '.'
import Text, { textType } from '../Text'

const DividerStories = () => (
  <StyledView>
    <StyledView>
      <Text textType={textType.H2}>Atom|Divider</Text>
    </StyledView>
    <StyledView>
      <Divider />
    </StyledView>
    <StyledView>
      <Text>end of divider</Text>
    </StyledView>
  </StyledView>
)

const StyledView = styled.View`
  width: 100%;
  padding-top: 5;
`

export default DividerStories
