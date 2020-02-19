import styled from '@emotion/native'
import React from 'react'

const Input = props => <StyledInput {...props} />

// TODO - Implement label
const StyledWrapper = styled.TouchableHighlight``
const StyledInput = styled.TextInput`
  border-radius: 2.5px;
  border: 1px solid #999;
  padding: 5px;
`

Input.defaultProps = {}

export default Input
