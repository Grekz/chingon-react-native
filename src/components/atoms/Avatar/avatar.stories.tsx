import styled from '@emotion/native'
import React from 'react'
import Avatar from '.'
import Text, { textType } from '../Text'

const AvatarStories = () => (
  <StyledView>
    <StyledView>
      <Text textType={textType.H2}>Atom|Avatar</Text>
    </StyledView>
    <StyledView>
      <Avatar uri={'https://randomuser.me/api/portraits/men/35.jpg'} />
    </StyledView>
    <StyledView>
      <Avatar />
    </StyledView>
  </StyledView>
)

const StyledView = styled.View`
  width: 100%;
  padding-top: 5;
`

export default AvatarStories
