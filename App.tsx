import styled from '@emotion/native'
import { ThemeProvider } from 'emotion-theming'
import React from 'react'
import { ScrollView } from 'react-native'
import AvatarStories from './src/components/atoms/Avatar/avatar.stories'
import BadgeStories from './src/components/atoms/Badge/badge.stories'
import ButtonStories from './src/components/atoms/Button/button.stories'
import CardStories from './src/components/atoms/Card/card.stories'
import DividerStories from './src/components/atoms/Divider/divider.stories'
import TextStories from './src/components/atoms/Text/text.stories'

const theme = {
  backgroundColor: '#f0ead6',
  color: '#000',
  optionButton: '#eee',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ScrollView>
        <StyledView>
          <BadgeStories />
          <AvatarStories />
          <TextStories />
          <ButtonStories />
          <CardStories />
          <DividerStories />
        </StyledView>
      </ScrollView>
    </ThemeProvider>
  )
}

const StyledView = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
`
export default App
