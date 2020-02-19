import styled from '@emotion/native'
import React from 'react'
import SocialIcon from '.'
import Text, { textType } from '../Text'

const SocialIconStories = () => (
  <StyledView>
    <StyledView>
      <Text textType={textType.H2}>Atom|SocialIcon</Text>
    </StyledView>
    <StyledView>
      <SocialIcon.Facebook />
    </StyledView>
    <StyledView>
      <SocialIcon.LinkedIn />
    </StyledView>
    <StyledView>
      <SocialIcon.Twitch />
    </StyledView>
    <StyledView>
      <SocialIcon.Twitter />
    </StyledView>
    <StyledView>
      <SocialIcon.Youtube />
    </StyledView>
  </StyledView>
)

const StyledView = styled.View`
  width: 100%;
  padding-top: 5;
`

export default SocialIconStories
