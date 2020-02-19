import styled from '@emotion/native'
import React from 'react'
import Slider from '.'
import Text, { textType } from '../../atoms/Text'

const SliderStories = () => (
  <StyledView>
    <StyledView>
      <Text textType={textType.H2}>Molecule|Slider</Text>
    </StyledView>
    <StyledView>
      <Slider />
    </StyledView>
  </StyledView>
)

const StyledView = styled.View`
  width: 100%;
  padding-top: 5;
`

export default SliderStories
