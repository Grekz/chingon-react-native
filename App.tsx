import styled from '@emotion/native'
import { ThemeProvider } from 'emotion-theming'
import React from 'react'
import { ScrollView } from 'react-native'

import AlertStories from './src/components/atoms/Alert/alert.stories'
import AvatarStories from './src/components/atoms/Avatar/avatar.stories'
import BadgeStories from './src/components/atoms/Badge/badge.stories'
import ButtonStories from './src/components/atoms/Button/button.stories'
import CardStories from './src/components/atoms/Card/card.stories'
import CheckboxStories from './src/components/atoms/Checkbox/checkbox.stories'
import DividerStories from './src/components/atoms/Divider/divider.stories'
import DropdownStories from './src/components/atoms/Dropdown/dropdown.stories'
import IconStories from './src/components/atoms/Icon/icon.stories'
import InputStories from './src/components/atoms/Input/input.stories'
import ListItemStories from './src/components/atoms/ListItem/listItem.stories'
import ProgressStories from './src/components/atoms/Progress/progress.stories'
import SocialIconStories from './src/components/atoms/SocialIcon/socialIcon.stories'
import TextStories from './src/components/atoms/Text/text.stories'
import BreadcrumbsStories from './src/components/molecules/Breadcrumbs/breadcrumbs.stories'
import ButtonGroupStories from './src/components/molecules/ButtonGroup/buttonGroup.stories'
import HeaderStories from './src/components/molecules/Header/header.stories'
import ListStories from './src/components/molecules/List/list.stories'
import ModalStories from './src/components/molecules/Modal/modal.stories'
import SliderStories from './src/components/molecules/Slider/slider.stories'

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
          <ButtonGroupStories />
          <DropdownStories />
          <BreadcrumbsStories />
          <HeaderStories />
          <ListStories />
          <ListItemStories />
          <CheckboxStories />
          <ProgressStories />
          <IconStories />
          <SocialIconStories />
          <SliderStories />
          <ModalStories />
          <InputStories />
          <AlertStories />
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
