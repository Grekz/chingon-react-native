import styled from '@emotion/native'
import React from 'react'
import Text from '../Text'
const Checkbox = props => (
  <Text>
    <StyledView {...props} />
  </Text>
)

const StyledView = styled.Switch`
  background-color: ${props => props.color};
  height: ${props => props.height};
`

Checkbox.defaultProps = {
  color: '#999',
  height: 1,
}

export default Checkbox
