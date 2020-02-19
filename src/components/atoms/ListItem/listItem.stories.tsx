import styled from '@emotion/native'
import React from 'react'
import ListItem from '.'
import Avatar from '../Avatar'
import Text, { textType } from '../Text'

const ListItemStories = () => (
  <StyledView>
    <StyledView>
      <Text textType={textType.H2}>Atom|ListItem</Text>
    </StyledView>
    <StyledView>
      <ListItem>
        <Avatar />
        <Text>Something</Text>
      </ListItem>
      <ListItem>
        <Text>asda</Text>
      </ListItem>
    </StyledView>
  </StyledView>
)

const StyledView = styled.View`
  width: 100%;
  padding-top: 5;
`

export default ListItemStories
