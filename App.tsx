import React from 'react'
import { Picker} from 'react-native'
import styled from '@emotion/native'
import { ThemeProvider } from 'emotion-theming'
import TextStories from './src/components/atoms/Text/text.stories'

const theme = {
  color: '#000',
  backgroundColor: '#f0ead6',
  optionButton: '#eee'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TextStories/>  
    </ThemeProvider>
  );
}

const StyledView = styled.View`
  flex:1;
  display:flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
`
export default App