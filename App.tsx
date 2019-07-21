import styled from '@emotion/native'
import { ThemeProvider } from 'emotion-theming'
import React from 'react'
import { Picker } from 'react-native'
import ButtonStories from './src/components/atoms/Button/button.stories'
import TextStories from './src/components/atoms/Text/text.stories'

const theme = {
  backgroundColor: '#f0ead6',
  color: '#000',
  optionButton: '#eee',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledView>
        <TextStories />
        <ButtonStories />
      </StyledView>
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
