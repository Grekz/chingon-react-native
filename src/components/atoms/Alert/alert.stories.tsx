import styled from '@emotion/native'
import React from 'react'
import Alert from '.'
import Text, { textType } from '../Text'

const AlertStories = () => (
  <StyledView>
    <StyledView>
      <Text textType={textType.H2}>Atom|Alert</Text>
    </StyledView>
    <StyledView>
      <Alert>
        <Text>Show me the content</Text>
      </Alert>
    </StyledView>
    <StyledView>
      <Alert />
    </StyledView>
  </StyledView>
)

const StyledView = styled.View`
  width: 100%;
  padding-top: 5;
`

export default AlertStories
