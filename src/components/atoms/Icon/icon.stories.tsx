import styled from '@emotion/native'
import React from 'react'
import Icon, { iconName } from '.'
import Text, { textType } from '../Text'

const IconStories = () => (
  <StyledView>
    <StyledView>
      <Text textType={textType.H2}>Atom|Icon</Text>
    </StyledView>
    <StyledView>
      <Icon />
    </StyledView>
    <StyledView>
      <Icon icon={iconName.BIN2} />
    </StyledView>
  </StyledView>
)

const StyledView = styled.View`
  width: 100%;
  padding-top: 5;
`

export default IconStories
