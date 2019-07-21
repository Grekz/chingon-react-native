import React from 'react'
import styled from '@emotion/native'
import normalize from '../../../helpers/normalizeText'

const Text = props => <StyledText {...props} />

const textType = {
    H1: 'H1',
    H2: 'H2',
    H3: 'H3',
    H4: 'H4',
    DEFAULT: 'DEFAULT'
}
const ATTRS = {
    [textType.DEFAULT] : {fontSize: 16, fontWeight: 'normal'},
    [textType.H1] : {fontSize: 40, fontWeight:'bold'},
    [textType.H2] : {fontSize: 34, fontWeight:'bold'},
    [textType.H3] : {fontSize: 28, fontWeight:'bold'},
    [textType.H4] : {fontSize: 24, fontWeight:'bold'}
}

const StyledText = styled.Text`
    font-size: ${props => `${normalize(ATTRS[props.textType].fontSize)}px`};
    font-weight: ${props => ATTRS[props.textType].fontWeight};
`


Text.defaultProps = {
    textType: textType.DEFAULT,
}
export {textType}
export default Text