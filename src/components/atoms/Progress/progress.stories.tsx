import styled from '@emotion/native'
import React from 'react'
import Progress from '.'
import Text, { textType } from '../Text'

const ProgressStories = () => (
  <StyledView>
    <StyledView>
      <Text textType={textType.H2}>Atom|Progress</Text>
    </StyledView>
    <StyledView>
      <Progress />
    </StyledView>
    <StyledView>
      <Progress progress={45} />
    </StyledView>
  </StyledView>
)

const StyledView = styled.View`
  width: 100%;
  padding-top: 5;
`

export default ProgressStories
