import styled from '@emotion/native'
import React from 'react'
import Breadcrumbs from '.'
import Avatar from '../../atoms/Avatar'
import Text, { textType } from '../../atoms/Text'

const BreadcrumbsStories = () => (
  <StyledView>
    <StyledView>
      <Text textType={textType.H2}>Molecule|List</Text>
    </StyledView>
    <StyledView>
      <Breadcrumbs
        items={[<Text key={1}>x</Text>, <Text key={2}>Sassad</Text>]}
      />
    </StyledView>
  </StyledView>
)

const StyledView = styled.View`
  width: 100%;
  padding-top: 5;
`

export default BreadcrumbsStories
