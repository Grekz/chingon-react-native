import React from 'react'
import styled from '@emotion/native'
import Text, {textType} from '.'

const TextStories = () => <StyledView>
    <StyledView>
        <Text>Default</Text>
    </StyledView>
    <StyledView>
        <Text textType={textType.H1}>h1 text</Text>
    </StyledView>
    <StyledView>
        <Text textType={textType.H2}>h2 text</Text>
    </StyledView>
    <StyledView>
        <Text textType={textType.H3}>h3 text</Text>
    </StyledView>
    <StyledView>
        <Text textType={textType.H4}>h4 text</Text>
    </StyledView>
</StyledView>

const StyledView = styled.View``

export default TextStories