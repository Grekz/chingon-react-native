import styled from '@emotion/native'
import React from 'react'
import Button, { buttonSize, buttonType } from '.'
import Text, { textType } from '../Text'

const ButtonStories = () => (
  <StyledView>
    <StyledView>
      <Text textType={textType.H2}>Atom|Button</Text>
    </StyledView>
    <StyledView>
      <Button title="Default > Medium|Normal" />
    </StyledView>
    <StyledView>
      <Button
        title="Small|Outline"
        buttonSize={buttonSize.SMALL}
        buttonType={buttonType.OUTLINE}
        fontColor='#333'
      />
    </StyledView>
    <StyledView>
      <Button
        title="Large|Link"
        fontColor='#333'
        buttonSize={buttonSize.LARGE}
        buttonType={buttonType.LINK}
      />
    </StyledView>
  </StyledView>
)

const StyledView = styled.View`
  width: 100%;
  padding-top: 5;
`

export default ButtonStories
