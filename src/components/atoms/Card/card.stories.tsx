import styled from '@emotion/native'
import React from 'react'
import Card from '.'
import Text, { textType } from '../Text'

const CardStories = () => (
  <StyledView>
    <StyledView>
      <Text textType={textType.H2}>Atom|Button</Text>
    </StyledView>
    <StyledView>
      <Card title="Default with title" />
    </StyledView>
    <StyledView>
      <Card>
        <Text>Some Content</Text>
      </Card>
    </StyledView>
    <StyledView>
      <Card title="with title">
        <Text>Some Text</Text>
      </Card>
    </StyledView>
  </StyledView>
)

const StyledView = styled.View`
  width: 100%;
  padding-top: 5;
`

export default CardStories
