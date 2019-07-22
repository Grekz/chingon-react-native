import styled from '@emotion/native'
import React from 'react'
import Header from '.'
import Avatar from '../../atoms/Avatar'
import Text, { textType } from '../../atoms/Text'

const HeaderStories = () => (
  <StyledView>
    <StyledView>
      <Text textType={textType.H2}>Molecule|Header</Text>
    </StyledView>
    <StyledView>
      <Header
        items={[
          <StyledView key={1}>
            <Avatar />
            <Text>Something</Text>
          </StyledView>,
          <Text key={2}>Sassad</Text>,
        ]}
      />
    </StyledView>
  </StyledView>
)

const StyledView = styled.View`
  width: 100%;
  padding-top: 5;
`

export default HeaderStories
