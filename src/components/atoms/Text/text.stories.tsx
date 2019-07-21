import styled from '@emotion/native'
import React from 'react'
import Text, { textType } from '.'

const TextStories = () => (
  <StyledView>
    <StyledView>
      <Text textType={textType.H2}>Atom|Text</Text>
      <Text>Default</Text>
      <Text textType={textType.H1}>h1 text</Text>
      <Text textType={textType.H2}>h2 text</Text>
      <Text textType={textType.H3}>h3 text</Text>
      <Text textType={textType.H4}>h4 text</Text>
    </StyledView>
  </StyledView>
)

const StyledView = styled.View`
  width: 100%;
`

export default TextStories
